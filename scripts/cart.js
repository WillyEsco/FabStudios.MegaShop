document.addEventListener('DOMContentLoaded', () => {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalDisplay = document.getElementById('cart-total');
    const cartToggle = document.getElementById('cart-toggle');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Mostrar/Ocultar el carrito lateral
    cartToggle.addEventListener('click', () => {
        cartSidebar.classList.toggle('cart-visible');
        cartSidebar.classList.toggle('cart-hidden');
    });

    // Función para agregar productos al carrito
    const addToCart = (product, quantity) => {
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('.nombre-producto').textContent;
        const productPrice = parseFloat(product.querySelector('.precio').textContent.replace('U$S', '').trim());

        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.push({ id: productId, name: productName, price: productPrice, quantity });
        }

        saveCart();
        renderCart();
    };

    // Función para actualizar el carrito en el DOM
    const renderCart = () => {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</p>
                <div class="cart-item-actions">
                    <button class="increment-btn" data-index="${index}"><span class="material-icons">add</span></button>
                    <button class="decrement-btn" data-index="${index}"><span class="material-icons">remove</span></button>
                    <button class="trash-btn" data-index="${index}"><span class="material-icons">delete</span></button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price * item.quantity;
        });

        cartTotalDisplay.textContent = total.toFixed(2);

        attachCartActions();
    };

    // Función para guardar el carrito en localStorage
    const saveCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    // Adjuntar eventos a los botones dentro del carrito
    const attachCartActions = () => {
        const incrementButtons = cartItemsContainer.querySelectorAll('.increment-btn');
        const decrementButtons = cartItemsContainer.querySelectorAll('.decrement-btn');
        const trashButtons = cartItemsContainer.querySelectorAll('.trash-btn');

        incrementButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.closest('button').dataset.index;
                cart[index].quantity++;
                saveCart();
                renderCart();
            });
        });

        decrementButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.closest('button').dataset.index;
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1);
                }
                saveCart();
                renderCart();
            });
        });

        trashButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.closest('button').dataset.index;
                cart.splice(index, 1);
                saveCart();
                renderCart();
            });
        });
    };

    // Adjuntar eventos a los botones de las cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const addToCartBtn = card.querySelector('.btn-md3');
        addToCartBtn.addEventListener('click', () => {
            addToCart(card, 1);
        });
    });

    // Inicializar
    renderCart();
});
