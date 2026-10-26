const WHATSAPP_NUMBER = "573248306455"; // Format with country code for link

        const productsData = {
            fresas: [
                { 
                    id: 'f1',
                    name: 'Fresa Sencilla',
                    desc: 'Crema de la casa, 3 capas de fresas, 1 topping',
                    sizes: [{name: '12 onzas', price: 14000}, {name: '16 onzas', price: 18000}],
                    img: './productos/Tradicional.jpg' 
                },
                {
                    id: 'f2',
                    name: 'Fresa Durazno',
                    desc: 'Crema, 3 capas fresa, 3 capas durazno, 3 capas queso, Suspiro',
                    sizes: [{name: '12 onzas', price: 17000}, {name: '16 onzas', price: 22000}],
                    img: './productos/fresaDurazno.jpg' 
                },
                { 
                    id: 'f3',
                    name: 'Fresa Browni',
                    desc: 'Crema, 3 capas Browni, 3 capas fresas, Chocolate derretido',
                    sizes: [{name: '12 onzas', price: 19000}, {name: '16 onzas', price: 23000}],
                    img: './productos/fresaBrownie.jpg'
                },
                { 
                    id: 'f4',
                    name: 'Fresa Triplequeso',
                    desc: 'Crema, 3 capas queso, 3 capas fresa, Chocolate derretido',
                    sizes: [{name: '12 onzas', price: 19000}, {name: '16 onzas', price: 23000}],
                    img: './productos/fresaTriplequeso.jpg'
                },
                { 
                    id: 'f5',
                    name: 'Merengón',
                    desc: 'Queso, suspiros, Fresa, kiwi, Durazno, 1 topping',
                    sizes: [{name: '16 onzas', price: 18000}],
                    img: './productos/merengon.jpg' 
                },
                { 
                    id: 'f6',
                    name: 'Cono Tropical',
                    desc: 'Galleta crocante, Fresa, Queso, Banano, Durazno, Oreo, Chocolate, Chocorramo, Piazza, M&M',
                    sizes: [{name: 'Único', price: 28000}],
                    img: './productos/conoTropical.jpg'
                },
                {
                    id: 'f7',
                    name: 'Cono Piazza',
                    desc: 'Galleta crocante, Fresas, Chocolate, Chocorramo, Piazza, M&M',
                    sizes: [{name: 'Único', price: 22000}],
                    img: './productos/conoPiazza.jpg'
                },
                { 
                    id: 'f8',
                    name: 'Oreo Fresas y Banano',
                    desc: 'Crema, Banano, 3 capas oreo, Chocolate, 2 galletas oreo',
                    sizes: [{name: '12 onzas', price: 18000}, {name: '16 onzas', price: 22000}],
                    img: './productos/OreoFresas.jpg'
                },
                {
                    id: 'f9',
                    name: 'Piazza Fresas y Banano',
                    desc: 'Crema, Banano, Fresa, Queso, Piazza',
                    sizes: [{name: '12 onzas', price: 18000}, {name: '16 onzas', price: 22000}],
                    img: './productos/piazzaFresas.jpg'
                },
                {
                    id: 'f10', 
                    name: 'Fresa Kiwi',
                    desc: 'Crema, 3 capas queso, 3 capas fresa, Kiwi',
                    sizes: [{name: '12 onzas', price: 20000}, {name: '16 onzas', price: 24000}],
                    img: './productos/FresaKiwi.jpg'
                },
                {
                    id: 'f11',
                    name: 'Banaqueso',
                    desc: 'Crema, 3 capas queso, Solo banano, Oreo, Galleta oreo, Chocolate',
                    sizes: [{name: '12 onzas', price: 18000}, {name: '16 onzas', price: 23000}], 
                    img: './productos/BananQueso.jpg'
                }
            ],
            obleas: [
                {
                    id: 'o1',
                    name: 'Sencilla',
                    desc: 'Arequipe, Pepitas, Maní, Crema',
                    sizes: [{name: 'Único', price: 4000}],
                    img: './productos/ObleaSencilla.jpg'
                },
                { 
                    id: 'o2',
                    name: 'Queso y Arequipe',
                    desc: 'Mucho queso, Crema, Arequipe',
                    sizes: [{name: 'Único', price: 10000}],
                    img: './productos/ObleaQueAre.jpg'
                },
                {
                    id: 'o3',
                    name: 'Quesuda Completa',
                    desc: 'Queso, Fresas, Oreo, Arequipe, Crema, Pepitas',
                    sizes: [{name: 'Único', price: 15000}],
                    img: './productos/Quesuda.jpg'
                },
                { 
                    id: 'o4',
                    name: 'Tropical',
                    desc: 'Arequipe, Queso, Fresa, Kiwi, Durazno, Crema, Oreo',
                    sizes: [{name: 'Único', price: 20000}],
                    img: './productos/Tropical.jpg'
                }
            ],
            micheladas: [
                {
                    id: 'm1',
                    name: 'Amar y ya',
                    desc: 'Tropical Bosm Piña Maracuyá  Mango Perlas expolivas Limon Bretaña y Sirope',
                    sizes: [{name: '16 onzas', price: 12000}, {name: '24 onzas', price: 15000}],
                    img: './productos/Amar y ya.jpeg'
                },
                {
                    id:'m2',
                    name: 'Berry Fuego',
                    desc: 'Mermelada de fresa mora y cereza Limon Perlas explosivas Bretaña y Sirope',
                    sizes: [{name: '16 onzas', price: 12000}, {name: '24 onzas', price: 15000}],
                    img: './productos/Berry Fuego.jpeg'
                },
                {
                    id:'m3',
                    name: 'Miche Grinch',
                    desc: 'Mermelada de kiwi manzana verde y limón Bretaña Perlas explosivas y Sirope',
                    sizes: [{name: '16 onzas', price: 12000}, {name: '24 onzas', price: 15000}],
                    img: './productos/Miche grinch.jpeg'
                }
            ]
        };

        let currentCategory = 'fresas';
        let cart = JSON.parse(localStorage.getItem('fresasVictoriaCart')) || [];
        
        // Modal State
        let selectedProduct = null;
        let selectedSizeIndex = 0;
        let selectedQty = 1;

        // --- Init ---
        document.addEventListener('DOMContentLoaded', () => {
            renderProducts(currentCategory);
            updateCartBadge();
            initScrollObserver();
            
            // Handle fallback images
            document.querySelectorAll('img').forEach(img => {
                img.addEventListener('error', function() {
                    this.src = 'https://placehold.co/100x100/1e1e1e/ff4d85?text=FV';
                });
            });
        });

        // --- Format Currency ---
        const formatPrice = (price) => {
            return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price);
        };

        // --- Render Products Grid ---
        function renderProducts(category) {
            const container = document.getElementById('products-container');
            const title = document.getElementById('category-title');
            container.innerHTML = '';
            
            const titles = {
                'fresas': 'Fresas & Conos 🍓',
                'obleas': 'Obleas 🧇',
                'micheladas': 'Sodas Micheladas 🍹'
            };
            title.innerText = titles[category];

            productsData[category].forEach((product, index) => {
                const isEmoji = product.img === '🧇';
                const imageHtml = isEmoji 
                    ? `<div class="w-20 h-20 bg-dark-bg rounded-xl flex items-center justify-center text-4xl shadow-inner border border-white/5 flex-shrink-0">${product.img}</div>`
                    : `<img src="${product.img}" alt="${product.name}" class="w-20 h-20 object-cover rounded-xl shadow-md border border-white/10 flex-shrink-0" onerror="this.src='https://placehold.co/100x100/1e1e1e/ff4d85?text=FV'">`;
                
                const priceDisplay = product.sizes.length > 1 
                    ? `<span class="text-pink-brand font-bold text-lg">${formatPrice(product.sizes[0].price)} - ${formatPrice(product.sizes[product.sizes.length-1].price)}</span>`
                    : `<span class="text-pink-brand font-bold text-lg">${formatPrice(product.sizes[0].price)}</span>`;

                const cardHtml = `
                    <div class="reveal bg-dark-card rounded-2xl p-4 flex gap-4 cursor-pointer hover:bg-[#252525] transition-colors border border-white/5 shadow-lg group" onclick="openProductModal('${category}', '${product.id}')" style="transition-delay: ${index * 50}ms">
                        ${imageHtml}
                        <div class="flex-1 flex flex-col justify-center">
                            <h3 class="font-chewy text-xl text-white group-hover:text-pink-brand transition-colors">${product.name}</h3>
                            <p class="text-gray-400 text-xs mt-1 line-clamp-2 leading-tight">${product.desc}</p>
                            <div class="mt-2">
                                ${priceDisplay}
                            </div>
                        </div>
                        <div class="flex items-center justify-center">
                            <div class="w-8 h-8 rounded-full bg-pink-brand/10 text-pink-brand flex items-center justify-center group-hover:bg-pink-brand group-hover:text-white transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            </div>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', cardHtml);
            });

            // Trigger animations
            setTimeout(() => {
                document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
            }, 50);
        }

        function filterCategory(category) {
            currentCategory = category;
            
            // Update Buttons UI
            document.querySelectorAll('.cat-btn').forEach(btn => {
                btn.classList.remove('bg-pink-brand', 'text-white', 'border-pink-light/30');
                btn.classList.add('bg-dark-card', 'text-gray-300', 'border-white/5');
            });
            const activeBtn = document.getElementById(`btn-cat-${category}`);
            activeBtn.classList.remove('bg-dark-card', 'text-gray-300', 'border-white/5');
            activeBtn.classList.add('bg-pink-brand', 'text-white', 'border-pink-light/30');

            renderProducts(category);
        }

        // --- Scroll Observer for Animations ---
        function initScrollObserver() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            // Apply to dynamically added elements via MutationObserver if needed, 
            // but since we add classes on render, it's fine.
        }

        // --- Product Modal ---
        function openProductModal(category, productId) {
            selectedProduct = productsData[category].find(p => p.id === productId);
            selectedSizeIndex = 0;
            selectedQty = 1;
            
            const isEmoji = selectedProduct.img === '🧇';
            const imgEl = document.getElementById('modal-img');
            
            if (isEmoji) {
                imgEl.outerHTML = `<div id="modal-img" class="w-32 h-32 rounded-2xl shadow-lg border-2 border-pink-brand/20 bg-dark-bg text-6xl flex items-center justify-center">${selectedProduct.img}</div>`;
            } else {
                imgEl.outerHTML = `<img id="modal-img" src="${selectedProduct.img}" alt="${selectedProduct.name}" class="w-32 h-32 object-cover rounded-2xl shadow-lg border-2 border-pink-brand/20 bg-dark-bg flex items-center justify-center" onerror="this.src='https://placehold.co/100x100/1e1e1e/ff4d85?text=FV'">`;
            }

            document.getElementById('modal-title').innerText = selectedProduct.name;
            document.getElementById('modal-desc').innerText = selectedProduct.desc;
            document.getElementById('modal-obs').value = '';
            
            renderSizes();
            updateModalPrice();

            document.getElementById('product-modal').classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeProductModal() {
            document.getElementById('product-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function renderSizes() {
            const sizesContainer = document.getElementById('modal-sizes');
            sizesContainer.innerHTML = '';
            
            selectedProduct.sizes.forEach((size, index) => {
                const isSelected = index === selectedSizeIndex;
                const activeClass = isSelected ? 'border-pink-brand bg-pink-brand/10 text-white' : 'border-white/10 bg-dark-input text-gray-400';
                
                const html = `
                    <button onclick="selectSize(${index})" class="border-2 rounded-xl p-3 text-center transition-colors ${activeClass}">
                        <div class="font-bold text-sm mb-1">${size.name}</div>
                        <div class="text-xs ${isSelected ? 'text-pink-light' : 'text-gray-500'}">${formatPrice(size.price)}</div>
                    </button>
                `;
                sizesContainer.insertAdjacentHTML('beforeend', html);
            });
        }

        function selectSize(index) {
            selectedSizeIndex = index;
            renderSizes();
            updateModalPrice();
        }

        function updateQty(change) {
            const newQty = selectedQty + change;
            if (newQty >= 1 && newQty <= 20) {
                selectedQty = newQty;
                document.getElementById('modal-qty').innerText = selectedQty;
                updateModalPrice();
            }
        }

        function updateModalPrice() {
            const price = selectedProduct.sizes[selectedSizeIndex].price;
            const total = price * selectedQty;
            document.getElementById('modal-total-price').innerText = formatPrice(total);
        }

        // --- Cart Logic ---
        function addToCart() {
            const obs = document.getElementById('modal-obs').value.trim();
            const size = selectedProduct.sizes[selectedSizeIndex];
            
            const cartItem = {
                id: Date.now().toString(), // unique id for cart item
                productId: selectedProduct.id,
                name: selectedProduct.name,
                sizeName: size.name,
                price: size.price,
                qty: selectedQty,
                obs: obs,
                img: selectedProduct.img
            };

            cart.push(cartItem);
            saveCart();
            updateCartBadge();
            closeProductModal();
            showToast();
        }

        function saveCart() {
            localStorage.setItem('fresasVictoriaCart', JSON.stringify(cart));
        }

        function updateCartBadge() {
            const badge = document.getElementById('cart-badge');
            const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
            
            if (totalItems > 0) {
                badge.innerText = totalItems;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }

        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            saveCart();
            updateCartBadge();
            renderCartItems();
        }

        // --- Cart Modal ---
        function openCart() {
            renderCartItems();
            document.getElementById('cart-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
            handlePaymentChange(); // set initial state for payment block
        }

        function closeCart() {
            document.getElementById('cart-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function renderCartItems() {
            const container = document.getElementById('cart-items');
            const emptyMsg = document.getElementById('cart-empty-msg');
            const checkoutSection = document.getElementById('checkout-section');
            const totalPriceEl = document.getElementById('cart-total-price');
            
            container.innerHTML = '';
            
            if (cart.length === 0) {
                emptyMsg.classList.remove('hidden');
                checkoutSection.classList.add('hidden');
                return;
            }

            emptyMsg.classList.add('hidden');
            checkoutSection.classList.remove('hidden');

            let total = 0;

            cart.forEach(item => {
                total += item.price * item.qty;
                const isEmoji = item.img === '🧇';
                const imageHtml = isEmoji 
                    ? `<div class="w-12 h-12 bg-dark-bg rounded-lg flex items-center justify-center text-2xl border border-white/5">${item.img}</div>`
                    : `<img src="${item.img}" class="w-12 h-12 object-cover rounded-lg border border-white/10" onerror="this.src='https://placehold.co/100x100/1e1e1e/ff4d85?text=FV'">`;

                const obsHtml = item.obs ? `<div class="text-xs text-gray-500 italic mt-1 bg-dark-bg p-1 rounded inline-block">"${item.obs}"</div>` : '';

                const html = `
                    <div class="flex items-center gap-3 bg-dark-input p-3 rounded-xl border border-white/5">
                        ${imageHtml}
                        <div class="flex-1">
                            <h4 class="font-bold text-white text-sm">${item.name}</h4>
                            <div class="text-xs text-gray-400">${item.sizeName} | ${formatPrice(item.price)} x ${item.qty}</div>
                            ${obsHtml}
                        </div>
                        <div class="text-right">
                            <div class="font-bold text-pink-brand text-sm mb-1">${formatPrice(item.price * item.qty)}</div>
                            <button onclick="removeFromCart('${item.id}')" class="text-xs text-red-400 hover:text-red-300 bg-red-400/10 px-2 py-1 rounded">Quitar</button>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', html);
            });

            totalPriceEl.innerText = formatPrice(total);
        }

        // --- Checkout & Payment ---
        function handlePaymentChange() {
            const paymentMethod = document.getElementById('order-payment').value;
            const detailsDiv = document.getElementById('payment-details');
            const numSpan = document.getElementById('payment-number');

            if (paymentMethod === 'Efectivo al recibir') {
                detailsDiv.classList.add('hidden');
            } else {
                detailsDiv.classList.remove('hidden');
                // Simulate different numbers or use the same for all wallets
                numSpan.innerText = "3248306455"; 
            }
        }

        function copyNumber() {
            const num = document.getElementById('payment-number').innerText;
            navigator.clipboard.writeText(num).then(() => {
                const btn = document.querySelector('#payment-details button');
                const origHtml = btn.innerHTML;
                btn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> ¡Copiado!`;
                btn.classList.replace('text-pink-brand', 'text-green-400');
                setTimeout(() => {
                    btn.innerHTML = origHtml;
                    btn.classList.replace('text-green-400', 'text-pink-brand');
                }, 2000);
            }).catch(err => {
                // Fallback for iframe environments
                const textArea = document.createElement("textarea");
                textArea.value = num;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    alert("Número copiado al portapapeles");
                } catch (err) {
                    console.error('No se pudo copiar', err);
                }
                document.body.removeChild(textArea);
            });
        }

        function confirmOrder() {
            const name = document.getElementById('order-name').value.trim();
            const address = document.getElementById('order-address').value.trim();
            const phone = document.getElementById('order-phone').value.trim();
            const payment = document.getElementById('order-payment').value;

            if (!name || !address || !phone) {
                // Custom alert style or simple html5 validation can be used, keeping it simple:
                const btn = document.querySelector('#checkout-section button');
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Faltan datos de envío ⚠️';
                btn.classList.replace('bg-green-500', 'bg-red-500');
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.replace('bg-red-500', 'bg-green-500');
                }, 2000);
                return;
            }

            let total = 0;
            let message = `¡Hola *Fresas Victoria*! 🍓\nQuiero hacer un pedido:\n\n`;
            
            cart.forEach(item => {
                total += item.price * item.qty;
                message += `▪️ ${item.qty}x *${item.name}* (${item.sizeName}) - ${formatPrice(item.price * item.qty)}\n`;
                if (item.obs) message += `   _Obs: ${item.obs}_\n`;
            });

            message += `\n💰 *Total: ${formatPrice(total)}*\n\n`;
            message += `📍 *Datos del cliente:*\n`;
            message += `Nombre: ${name}\n`;
            message += `Dirección: ${address}\n`;
            message += `Teléfono: ${phone}\n`;
            message += `💳 Método de Pago: ${payment}`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

            // Clear Cart after redirect
            cart = [];
            saveCart();
            updateCartBadge();
            
            window.open(whatsappUrl, '_blank');
            closeCart();
        }

        // --- Utilities ---
        function showToast() {
            const toast = document.getElementById('toast');
            toast.classList.remove('opacity-0', 'translate-y-[-20px]');
            setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-[-20px]');
            }, 2500);
        }

        // --- Policies Modal ---
        function openPolicies() {
            document.getElementById('policy-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        function closePolicies() {
            document.getElementById('policy-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }