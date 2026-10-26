import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const MAX_PARTICLES = 30000;
const SCALE_FACTOR = 0.06;
const CAM_DISTANCE = 20;
const SPHERE_DETAIL = 3;
const EDGE_GLOW = 2.0;

// Ajuste Responsive
const isMobile = window.innerWidth < 768;

const DEFAULTS = {
    text: isMobile ? "FRESAS\nVICTORIA" : "FRESAS VICTORIA", // En móvil lo dividimos en 2 líneas
    tint: "#ff6f9d", 
    opacity: 12,
    bubbleSize: isMobile ? 5 : 14, // Burbujas mucho más finas en móvil
    density: isMobile ? 18 : 13,   // Más cantidad de burbujas para mayor resolución
    speed: 8,
    scatter: isMobile ? 3 : 10,    // Menos dispersión para que no se vea borroso
    hoverOn: true,
    hover: { radius: 9, lift: 8 },
    font: {
        fontFamily: "Chewy, cursive", 
        fontSize: isMobile ? 70 : 80, // Letra más grande y legible en 2 líneas
        fontWeight: 400,
        lineHeight: 1,
    }
};
function clamp(v, lo, hi, fallback) {
    const n = typeof v === "number" && isFinite(v) ? v : fallback;
    return Math.max(lo, Math.min(hi, n));
}

function settingsFor(cfg) {
    const font = cfg.font || {};
    return {
        family: font.fontFamily || "system-ui, sans-serif",
        fontSize: font.fontSize || 70,
        weight: font.fontWeight || 100,
        fontStyle: font.fontStyle || "normal",
        tracking: 0,
        lineRatio: 1,
        opacity: clamp(cfg.opacity, 1, 20, DEFAULTS.opacity) * 0.05,
        bubble: clamp(cfg.bubbleSize, 1, 20, DEFAULTS.bubbleSize) / 10,
        step: Math.max(1, Math.round(1 + (20 - clamp(cfg.density, 1, 20, DEFAULTS.density)) * 0.35)),
        growth: 0.002 + Math.pow(clamp(cfg.speed, 1, 20, DEFAULTS.speed), 2) * 0.00035,
        scatter: clamp(cfg.scatter, 0, 20, DEFAULTS.scatter) * 0.05,
        hoverRadius: clamp(cfg.hover?.radius, 1, 20, 9) * 0.9,
        hoverLift: clamp(cfg.hover?.lift, 1, 20, 8) * 0.5,
    };
}

const BUBBLE_VERTEX = `
    varying vec3 vNormal;
    varying float vFresnel;
    float rand(vec2 co) {
        return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
    }
    void main() {
        vNormal = normal * rand(instanceMatrix[3].xz);
        vec4 worldPosition = modelMatrix * instanceMatrix * vec4(position + vec3(0.0, 0.3, 0.0), 1.0);
        vec3 toEye = normalize(worldPosition.xyz - cameraPosition - vec3(1.0, 2.0, 0.0));
        vFresnel = pow(1.0 + dot(toEye, normal), 3.0);
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
`;

const BUBBLE_FRAGMENT = `
    uniform vec3 uTint;
    uniform float uEdge;
    uniform float uBody;
    varying vec3 vNormal;
    varying float vFresnel;
    void main() {
        vec3 colored = mix(vNormal, vec3(1.0), 0.75) * uTint;
        gl_FragColor = vec4(colored, uBody + uEdge * vFresnel);
    }
`;

function makeBubble(x, y, S) {
    return {
        x: x + S.scatter * (Math.random() - 0.5),
        y: y + S.scatter * (Math.random() - 0.5),
        z: 0,
        scale: 0.1 * Math.random(),
        maxScale: Math.pow(Math.random(), 3) * S.bubble,
        deltaScale: S.growth * (0.4 + Math.random()),
        lift: 0,
        hover: 0,
        riseJitter: 0.4 + 0.8 * Math.random(),
        toDelete: false,
    };
}

class BubbleTypeScene {
    constructor(container, cfg) {
        this.container = container;
        this.cfg = cfg;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        this.group = new THREE.Group();
        this.scene.add(this.group);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        
        const canvas = this.renderer.domElement;
        canvas.style.position = "absolute";
        canvas.style.inset = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        container.appendChild(canvas);

        this.textCanvas = document.createElement("canvas");
        this.textCtx = this.textCanvas.getContext("2d", { willReadFrequently: true });

        this.input = document.createElement("div");
        this.input.innerHTML = cfg.text;
        Object.assign(this.input.style, {
            position: "absolute", top: "0", left: "0", opacity: "0",
            whiteSpace: "pre", pointerEvents: "none", outline: "none"
        });
        container.appendChild(this.input);

        this.geometry = new THREE.IcosahedronGeometry(0.2, SPHERE_DETAIL);
        const S = settingsFor(cfg);
        this.material = new THREE.ShaderMaterial({
            vertexShader: BUBBLE_VERTEX,
            fragmentShader: BUBBLE_FRAGMENT,
            uniforms: {
                uTint: { value: new THREE.Color(cfg.tint) },
                uEdge: { value: EDGE_GLOW },
                uBody: { value: S.opacity },
            },
            depthTest: false,
            transparent: true,
        });

        this.dummy = new THREE.Object3D();
        this.coords = [];
        this.particles = [];
        this.stringBox = { wTexture: 0, wScene: 0, hTexture: 0, hScene: 0 };
        this.pointer = new THREE.Vector2();
        this.pointerOver = false;
        this.disposed = false;
        this.lastT = 0;

        this.applyInputStyle();
        this.handleInput();
        this.refreshText();
        this.bindEvents();
    }

    applyInputStyle() {
        const S = settingsFor(this.cfg);
        this.input.style.fontFamily = S.family;
        this.input.style.fontSize = S.fontSize + "px";
        this.input.style.fontWeight = String(S.weight);
    }

    handleInput() {
        this.text = this.cfg.text;
        // Convertimos los saltos de línea a <br> para medir la caja correctamente
        this.input.innerHTML = this.text.replace(/\n/g, "<br>");
        this.stringBox.wTexture = this.input.clientWidth;
        this.stringBox.wScene = this.stringBox.wTexture * SCALE_FACTOR;
        this.stringBox.hTexture = this.input.clientHeight;
        this.stringBox.hScene = this.stringBox.hTexture * SCALE_FACTOR;
    }

    refreshText() {
        this.sampleCoordinates();
        const S = settingsFor(this.cfg);
        this.particles = this.coords.map((c, i) => {
            const x = c.x * SCALE_FACTOR;
            const y = c.y * SCALE_FACTOR;
            const p = c.old && this.particles[i] ? this.particles[i] : makeBubble(x, y, S);
            if (c.toDelete) p.toDelete = true;
            return p;
        });
        this.recreateMesh();
    }

    sampleCoordinates() {
        const S = settingsFor(this.cfg);
        this.textCanvas.width = this.stringBox.wTexture;
        this.textCanvas.height = this.stringBox.hTexture;
        if (!(this.stringBox.wTexture > 0 && this.stringBox.hTexture > 0)) {
            this.coords = []; return;
        }

        this.textCtx.font = `${S.fontStyle} ${S.weight} ${S.fontSize}px ${S.family}`;
        this.textCtx.fillStyle = "#ffffff";
        this.textCtx.clearRect(0, 0, this.textCanvas.width, this.textCanvas.height);
        
        // Soporte para dibujar múltiples líneas centrado
        const lines = this.text.split("\n");
        const lineCount = Math.max(1, lines.length);
        for (let i = 0; i < lineCount; i++) {
            this.textCtx.fillText(lines[i], 0, ((i + 0.8) * this.stringBox.hTexture) / lineCount);
        }

        const w = this.textCanvas.width;
        const h = this.textCanvas.height;
        const data = this.textCtx.getImageData(0, 0, w, h).data;
        const mask = Array.from(Array(h), () => new Array(w));
        
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) mask[i][j] = data[(j + i * w) * 4] > 0;
        }

        if (this.coords.length !== 0) {
            const keptCoords = [];
            const keptParticles = [];
            this.coords.forEach((c, i) => {
                if (c.toDelete) return;
                keptCoords.push(c);
                if (this.particles[i]) keptParticles.push(this.particles[i]);
            });
            this.coords = keptCoords;
            this.particles = keptParticles;

            this.coords.forEach((c) => {
                if (mask[c.y] && mask[c.y][c.x]) {
                    c.old = true;
                    if (!c.toDelete) mask[c.y][c.x] = false;
                } else {
                    c.toDelete = true;
                }
            });
        }

        for (let i = 0; i < h; i += S.step) {
            for (let j = 0; j < w; j += S.step) {
                if (mask[i][j] && this.coords.length < MAX_PARTICLES) {
                    this.coords.push({ x: j, y: i, old: false, toDelete: false });
                }
            }
        }
    }

    recreateMesh() {
        if (this.mesh) {
            this.group.remove(this.mesh);
            this.mesh.dispose();
        }
        this.mesh = new THREE.InstancedMesh(this.geometry, this.material, this.particles.length);
        const identity = new THREE.Matrix4();
        for (let i = 0; i < this.particles.length; i++) this.mesh.setMatrixAt(i, identity);
        this.mesh.instanceMatrix.needsUpdate = true;
        this.mesh.position.x = -0.5 * this.stringBox.wScene;
        this.mesh.position.y = -0.6 * this.stringBox.hScene;
        this.group.add(this.mesh);
    }

    updateMatrices(dt) {
        if (!this.mesh) return;
        const k = dt * 60;
        const S = settingsFor(this.cfg);
        const localX = this.pointer.x + 0.5 * this.stringBox.wScene;
        const localY = this.pointer.y + 0.6 * this.stringBox.hScene;
        const radius = Math.max(0.001, S.hoverRadius);

        this.particles.forEach((p, i) => {
            if (p.toDelete) {
                p.scale -= S.growth * 6 * k;
                if (p.scale < 0) p.scale = 0;
            } else {
                p.scale += p.deltaScale * k;
                if (p.scale >= p.maxScale) {
                    p.scale = 0;
                    p.maxScale = Math.pow(Math.random(), 3) * S.bubble;
                    p.deltaScale = S.growth * (0.4 + Math.random());
                }
            }

            const y = this.stringBox.hScene - p.y;
            let target = 0;
            if (this.pointerOver) {
                const dx = p.x - localX;
                const dy = y - localY;
                const d = Math.sqrt(dx * dx + dy * dy);
                const near = Math.max(0, 1 - d / radius);
                target = near * near;
            }

            p.hover += (target - p.hover) * (1 - Math.exp(-dt * 5));
            p.lift = p.hover * S.hoverLift * p.riseJitter;

            this.dummy.quaternion.identity();
            this.dummy.position.set(p.x, y + p.lift, p.z);
            this.dummy.scale.setScalar(Math.max(0, p.scale));
            this.dummy.updateMatrix();
            this.mesh.setMatrixAt(i, this.dummy.matrix);
        });
        this.mesh.instanceMatrix.needsUpdate = true;
    }

    updateCamera() {
        const aspect = Math.max(1, this.container.clientWidth) / Math.max(1, this.container.clientHeight);
        const spanH = this.container.clientHeight * SCALE_FACTOR;
        this.camera.aspect = aspect;
        this.camera.position.set(0, 0, CAM_DISTANCE);
        this.camera.lookAt(0, 0, 0);
        this.camera.fov = 2 * Math.atan(spanH / 2 / CAM_DISTANCE) * (180 / Math.PI);
        this.camera.near = 0.1;
        this.camera.far = CAM_DISTANCE + 100;
        this.camera.updateProjectionMatrix();
    }

    start() {
        this.lastT = performance.now();
        const loop = () => {
            if (this.disposed) return;
            this.frameId = requestAnimationFrame(loop);
            const now = performance.now();
            let dt = (now - this.lastT) / 1000;
            this.lastT = now;
            if (dt > 0.05) dt = 0.05;
            this.updateMatrices(dt);
            this.renderer.render(this.scene, this.camera);
        };
        this.frameId = requestAnimationFrame(loop);
    }

    setSize(width, height) {
        if (this.disposed) return;
        this.renderer.setSize(width, height, false);
        this.updateCamera();
    }

    bindEvents() {
        const onMove = (e) => {
            const rect = this.container.getBoundingClientRect();
            this.pointer.set(
                (e.clientX - rect.left - rect.width / 2) * SCALE_FACTOR,
                -(e.clientY - rect.top - rect.height / 2) * SCALE_FACTOR
            );
            this.pointerOver = true;
        };
        this.container.addEventListener("pointermove", onMove);
        this.container.addEventListener("pointerleave", () => this.pointerOver = false);
    }
}

// Inicializador
document.addEventListener("DOMContentLoaded", () => {
    // Aseguramos de que se cargue la fuente 'Chewy' primero para dibujar bien el Canvas
    document.fonts.ready.then(() => {
        const container = document.getElementById("bubble-container");
        if (container) {
            const bubbleScene = new BubbleTypeScene(container, DEFAULTS);
            bubbleScene.setSize(container.clientWidth, container.clientHeight);
            bubbleScene.start();

            // Responsividad si giran el celular o redimensionan
            window.addEventListener('resize', () => {
                bubbleScene.setSize(container.clientWidth, container.clientHeight);
            });
        }
    });
});