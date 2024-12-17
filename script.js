const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        indicators[i].classList.remove('active');
    });
    slides[index].classList.add('active');
    indicators[index].classList.add('active');

    // Geser slider
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentSlide = currentSlide <= 0 ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = currentSlide >= slides.length - 1 ? 0 : currentSlide + 1;
    showSlide(currentSlide);
});

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const index = parseInt(indicator.getAttribute('data-slide'));
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Inisialisasi slide pertama
showSlide(currentSlide);
