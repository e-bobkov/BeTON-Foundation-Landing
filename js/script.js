let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.toggle('active', index === currentSlide);
    });
}

function moveSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    updateSlides();
}

function setCurrentSlide(index) {
    currentSlide = index;
    updateSlides();
}

// Initialize the slider
updateSlides();