// Datos de productos

const productosData = [
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
                    toggleButton.innerHTML = <span class="material-icons">expand_less</span>; // Cambiar a ^
                } else {
                    descriptionContainer.style.display = 'none';
                    toggleButton.innerHTML = <span class="material-icons">expand_more</span>; // Cambiar a ˅
                }
            });
        }
    });
});