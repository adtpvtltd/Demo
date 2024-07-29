const slides = document.querySelectorAll('.slide');
const sliderNav = document.querySelector('.slider-nav');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;


slides.forEach((_, index) => {
    const button = document.createElement('button');
    button.addEventListener('click', () => goToSlide(index));
    sliderNav.appendChild(button);
});

const navButtons = sliderNav.querySelectorAll('button');

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    navButtons[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    navButtons[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

navButtons[0].classList.add('active');


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


let slideInterval = setInterval(nextSlide, 3000);


const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 3000);
});