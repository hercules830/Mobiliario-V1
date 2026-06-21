// Inicialización de AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Configuración del carrusel de propiedades con Swiper
const propiedadesCarrusel = new Swiper('.propiedades__carrusel', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

// Configuración del carrusel de testimonios con Swiper
const testimoniosCarrusel = new Swiper('.testimonios__carrusel', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Efecto de sombra en el encabezado al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});
