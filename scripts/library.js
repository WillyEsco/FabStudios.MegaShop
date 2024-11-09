// Navbar
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showNextSlide() {
    slides[currentSlide].classList.remove('active'); // Ocultar la diapositiva actual
    currentSlide = (currentSlide + 1) % slides.length; // Mover a la siguiente
    slides[currentSlide].classList.add('active'); // Mostrar la nueva diapositiva
}
// Cambiar la diapositiva cada 3 segundos
setInterval(showNextSlide, 2000);

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
