
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
    showSlide(slideIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
    showSlide(slideIndex);
});


