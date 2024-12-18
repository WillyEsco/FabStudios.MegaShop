// Array para almacenar los productos en el carrito
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Referencias a elementos del DOM
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Renderizar los productos en el carrito
function renderCart() {
    cartItemsContainer.innerHTML = ""; // Limpiar el contenedor
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
                    <div class="cart-item-details">
                        <p> ${item.title}  (x${item.quantity})</p>
                        <p style="text-align: left"><strong>$${(item.price * item.quantity).toFixed(2)}</strong></p>
                    </div>
                    <button class="remove-btn material-icons md3-icon" data-index="${index}">
                        delete
                    </button>
                `;    cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = total.toFixed(2);

    // Asignar eventos de eliminar
    document.querySelectorAll(".remove-btn").forEach((btn) => {
        btn.addEventListener("click", removeFromCart);
    });
}

// Agregar un producto al carrito
function addToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Eliminar un producto del carrito
function removeFromCart(event) {
    const index = event.target.dataset.index;
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Inicializar el carrito
renderCart();

// Simular el proceso de compra
document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Procesando compra...");
    cart = [];
    localStorage.removeItem("cart");
    renderCart();
    window.location.href = 'index.html';
});
function goBackToIndex() {
    // Verificar si la página actual se abrió en una nueva pestaña
    if (window.opener) {
        // Cerrar la pestaña actual
        window.close();
        // Enfocar la pestaña de origen
        window.opener.focus();
    } else {
        // Si no hay ventana de origen, regresar al index
        window.location.href = 'index.html';
    }
}
