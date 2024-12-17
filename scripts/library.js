// Navbar
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;
// function showNextSlide() {
//     slides[currentSlide].classList.remove('active'); // Ocultar la diapositiva actual
//     currentSlide = (currentSlide + 1) % slides.length; // Mover a la siguiente
//     slides[currentSlide].classList.add('active'); // Mostrar la nueva diapositiva
// }
// Cambiar la diapositiva cada 3 segundos
// setInterval(showNextSlide, 2000);

// Obtener el modal y el enlace de contacto
var modal = document.getElementById("contactModal");
var contactLink = document.getElementById("contact-link");
var span = document.getElementsByClassName("close")[0];

// Al hacer clic en "Contacto", mostrar el modal
contactLink.onclick = function() {
    modal.style.display = "flex";
}

// Al hacer clic en la "X", cerrar el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Al hacer clic fuera del modal, cerrar el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const productsData = [
    {
        id: 1, Name: "Mickey Mouse Paperweight",
        Description: "pisapapeles de Mickey Mouse",
        Amount: "10.00"
    },
    {
        id: 2, Name: "Mickey Mouse Wizard Statuette",
        Description: "Mickey Mouse aprendiz de brujo",
        Amount: "10.00"
    }, 
    {
        id: 3, Name: "Bed Stopper Mickey Mouse",
        Description: "Tope de cama de Mickey Mouse",
        Amount: "10.00"
    }, 
    {
        id: 4, Name: "Disney Welcome Garden",
        Description: "Bienvenida de jardín Disney",
        Amount: "10.00"
    }, 
    {
        id: 5, Name: "Disney Air Fryer",
        Description: "Freidora de aire Disney",
        Amount: "10.00"
    }, 
    {
        id: 6, Name: "Disney Cooking Tables",
        Description: "Tablas de cocina Disney",
        Amount: "10.00"
    }, 
    {
        id: 7, Name: "Mickey Mouse Cookware",
        Description: "Microondas de Mickey Mouse",
        Amount: "10.00"
    }, 
    {
        id: 8, Name: "Cell Phone Holder",
        Description: "Sosten de celular de Mickey Mouse",
        Amount: "10.00"
    }, 
    {
        id: 9, Name: "Disney KitchenAid",
        Description: "Batidora de cocina Disney",
        Amount: "10.00"
    }, 
    {
        id: 10, Name: "Set of Pans",
        Description: "Set de cacerolas de Mickey Mouse",
        Amount: "10.00"
    },
    {
        id: 11, Name: "Disney Gang Fees",
        Description: "Tasas Mickey and Friends",
        Amount: "10.00"
    },
    {
        id: 12, Name: "Mickey Mouse Bread Toaster",
        Description: "Tostadora de pan de Mickey Mouse",
        Amount: "10.00"
    }, 
    {
        id: 13, Name: "Mickey Mouse Night Lamp",
        Description: "Lampara de noche Mickey Mouse",
        Amount: "10.00"
    }, 
    {
        id: 14, Name: "Disney Waffle Iron",
        Description: "Waflera Disney",
        Amount: "10.00"
    }, 
    {
        id: 15, Name: "Mickey Mouse Express Coffee Maker",
        Description: "Cafetera Express de Mickey Mouse",
        Amount: "10.00"
    }, 
    {
        id: 16, Name: "Carry on Suitcase set",
        Description: "Set de valijas Disney",
        Amount: "10.00"
    }, 
    {
        id: 17, Name: "Mickey Night Lamp 100 Years",
        Description: "Lampara Mickey Mouse 100 años",
        Amount: "10.00"
    }, 
    {
        id: 18, Name: "Disney Breakfast Set",
        Description: "Set de desayuno Disney",
        Amount: "10.00"
    }, 
    {
        id: 19, Name: "Mickey and Minnie Electric Oven",
        Description: "Horno electrico de Mickey y Minnie",
        Amount: "10.00"
    }, 
    {
        id: 20, Name: "Mickey In Love Paperweight",
        Description: "Pisapapeles de Mickey enamorado",
        Amount: "10.00"
    }
];
// funcion que dado un id devielve el item en el array de productos
function getProductById(id) {
    return productsData.find(product => product.id === id);
}

document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const addToCartBtn = product.querySelector('.btn-md3');
        let quantity = 0; // Inicializamos la cantidad en 0

        const resetCard = () => {
            // Eliminar botones de acción
            const actionContainer = product.querySelector('.action-buttons');
            if (actionContainer) actionContainer.remove();

            // Restablecer el botón "Comprar ahora"
            addToCartBtn.innerHTML = `
                <span class="btn-md3-icon">
                    <i class="material-icons">shopping_cart</i>
                </span>
                Comprar ahora
            `;

            // Restablecer el estado interno
            quantity = 0;
            addToCartBtn.disabled = false; // Habilitar el botón si estaba deshabilitado
        };

        addToCartBtn.addEventListener('click', () => {
            if (quantity === 0) {
                quantity = 1; // Establecemos la cantidad inicial
                renderActionButtons(product, quantity, resetCard);
                addToCartBtn.disabled = true; // Deshabilitar el botón "Comprar ahora" para evitar duplicados
            }
        });
    });

    function renderActionButtons(product, initialQuantity, resetCard) {
    const cardContent = product.querySelector('.card-content');
    const actionContainer = document.createElement('div');
    actionContainer.classList.add('action-buttons');
    cardContent.appendChild(actionContainer);

    // Botón de incremento
    const incrementBtn = document.createElement('button');
    incrementBtn.innerHTML = '<span class="material-icons">add</span>';
    incrementBtn.classList.add('btn-md3-action');
    actionContainer.appendChild(incrementBtn);

    // Botón de decremento
    const decrementBtn = document.createElement('button');
    decrementBtn.innerHTML = '<span class="material-icons">remove</span>';
    decrementBtn.classList.add('btn-md3-action');
    actionContainer.appendChild(decrementBtn);

    // Botón de eliminar
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<span class="material-icons">delete</span>';
    trashBtn.classList.add('btn-md3-action');
    actionContainer.appendChild(trashBtn);

    // Agregar animación de entrada
    setTimeout(() => {
        actionContainer.classList.add('visible');
    }, 10); // Retraso para activar la transición

    handleActionButtons(product, actionContainer, initialQuantity, resetCard);
}

function handleActionButtons(product, container, initialQuantity, resetCard) {
    let quantity = initialQuantity;
    const addToCartBtn = product.querySelector('.btn-md3');
    const [incrementBtn, decrementBtn, trashBtn] = container.children;

    const updateCartDisplay = () => {
        addToCartBtn.innerHTML = `
            <span class="material-icons">check</span> Agregado: ${quantity}
        `;
        addToCartSidebar(product, quantity); // Actualizar el carrito lateral
    };

    // Incrementar cantidad
    incrementBtn.addEventListener('click', () => {
        quantity++;
        updateCartDisplay();
    });

    // Decrementar cantidad
    decrementBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            updateCartDisplay();
        } else {
            resetCard();
            removeFromCartSidebar(product); // Eliminar del carrito lateral
        }
    });

    // Eliminar del carrito
    trashBtn.addEventListener('click', () => {
        resetCard();
        removeFromCartSidebar(product); // Eliminar del carrito lateral
    });

    // Actualiza la UI inicial
    updateCartDisplay();
}

});

// Función para limpiar saltos de línea y espacios innecesarios
function cleanText(text) {
    return text.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
}

function addToCartSidebar(product, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productTitle = cleanText(product.querySelector('.nombre-producto').textContent);
    const productPrice = parseFloat(product.querySelector('.precio').textContent.replace('U$S', '').trim());

    // Verificar si el producto ya existe en el carrito
    const existingProduct = cart.find(item => item.title === productTitle);
    if (existingProduct) {
        existingProduct.quantity = quantity;
    } else {
        cart.push({ title: productTitle, price: productPrice, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartSidebar(); // Actualizar el carrito
}

// function addToCartSidebar(product, quantity) {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];

//     const productTitle = cleanText(product.querySelector('.nombre-producto').textContent);
//     const productPrice = parseFloat(product.querySelector('.precio').textContent.replace('U$S', '').trim());

//     const existingProduct = cart.find(item => item.title === productTitle);
//     if (existingProduct) {
//         existingProduct.quantity = quantity;
//     } else {
//         cart.push({ title: productTitle, price: productPrice, quantity });
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     renderCartSidebar();
// }
function removeFromCartSidebar(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productTitle = cleanText(product.querySelector('.nombre-producto').textContent);

    const updatedCart = cart.filter(item => item.title !== productTitle);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    renderCartSidebar(); // Actualizar la vista
}

// function removeFromCartSidebar(product) {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const productTitle = product.querySelector('.nombre-producto').textContent;

//     const updatedCart = cart.filter(item => item.title !== productTitle);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     renderCartSidebar();
// }
// Sidebar del carrito
function renderCartSidebar() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalDisplay = document.getElementById('cart-total');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cartItemsContainer.innerHTML = ''; // Limpia el contenedor

    // Renderizar cada item del carrito
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.title} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotalDisplay.textContent = total.toFixed(2); // Actualizar el total
}

// function renderCartSidebar() {
//     const cartItemsContainer = document.getElementById('cart-items');
//     const cartTotalDisplay = document.getElementById('cart-total');
//     const cartSearch = document.getElementById('cart-search');
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     let total = 0;

//     const filterCart = (query) => {
//         const filteredCart = cart.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
//         displayCartItems(filteredCart);
//     };

//     const displayCartItems = (items) => {
//         cartItemsContainer.innerHTML = '';
//         total = 0;

//         items.forEach(item => {
//             const cartItem = document.createElement('div');
//             cartItem.classList.add('cart-item');
//             cartItem.innerHTML = `
//                 <p>${item.title} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</p>
//             `;
//             cartItemsContainer.appendChild(cartItem);
//             total += item.price * item.quantity;
//         });

//         cartTotalDisplay.textContent = total.toFixed(2);
//     };

//     cartSearch.addEventListener('input', (e) => {
//         filterCart(e.target.value);
//     });

//     displayCartItems(cart);
// }
document.addEventListener('DOMContentLoaded', () => {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartToggle = document.getElementById('cart-toggle');

    // Alternar visibilidad del carrito lateral
    cartToggle.addEventListener('click', () => {
        cartSidebar.classList.toggle('cart-visible');
        cartSidebar.classList.toggle('cart-hidden');
    });

    renderCartSidebar(); // Renderizar el carrito al cargar la página
});


// document.addEventListener('DOMContentLoaded', () => {
//     const cartSidebar = document.getElementById('cart-sidebar');
//     const cartToggle = document.getElementById('cart-toggle');

//     // Alternar visibilidad del carrito lateral
//     cartToggle.addEventListener('click', () => {
//         if (cartSidebar.classList.contains('cart-visible')) {
//             cartSidebar.classList.remove('cart-visible');
//             cartSidebar.classList.add('cart-hidden');
//         } else {
//             cartSidebar.classList.remove('cart-hidden');
//             cartSidebar.classList.add('cart-visible');
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const toggleButton = card.querySelector('.toggle-description');
        const descriptionContainer = card.querySelector('.description');
        const productId = parseInt(card.getAttribute('data-id'));

        // Encontrar el producto correspondiente
        const productData = productsData.find(product => product.id === productId);

        if (productData) {
            toggleButton.addEventListener('click', () => {
                if (descriptionContainer.style.display === 'none' || !descriptionContainer.style.display) {
                    descriptionContainer.style.display = 'block';
                    descriptionContainer.textContent = productData.Description;
                    toggleButton.innerHTML = `<span class="material-icons">expand_less</span>`; // Cambiar a ^
                } else {
                    descriptionContainer.style.display = 'none';
                    toggleButton.innerHTML = `<span class="material-icons">expand_more</span>`; // Cambiar a ˅
                }
            });
        }
    });
});
// ´´
