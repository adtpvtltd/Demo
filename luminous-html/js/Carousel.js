let currentIndexLeft = 0;
let currentIndexRight = 0;

function nextSlide(carousel) {
    const carouselWrapper = document.getElementById(`${carousel}-carousel`);
    const slides = carouselWrapper.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;

    if (carousel === 'left') {
        currentIndexLeft = (currentIndexLeft + 1) % totalSlides;
        slides.style.transform = `translateX(-${currentIndexLeft * 100}%)`;
    } else {
        currentIndexRight = (currentIndexRight + 1) % totalSlides;
        slides.style.transform = `translateX(-${currentIndexRight * 100}%)`;
    }
}

function prevSlide(carousel) {
    const carouselWrapper = document.getElementById(`${carousel}-carousel`);
    const slides = carouselWrapper.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;

    if (carousel === 'left') {
        currentIndexLeft = (currentIndexLeft - 1 + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${currentIndexLeft * 100}%)`;
    } else {
        currentIndexRight = (currentIndexRight - 1 + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${currentIndexRight * 100}%)`;
    }
}
