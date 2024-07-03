// JavaScript para controlar o carrossel de imagens

var carousel = document.querySelector('.carousel-container');
var slides = document.querySelectorAll('.slide');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var slideWidth = slides[0].clientWidth + 10; // Largura do slide + margem

var currentIndex = 0;

// Função para mover para o slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

// Função para mover para o próximo slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

// Atualiza o carrossel para mostrar o slide atual
function updateCarousel() {
    var offset = -currentIndex * slideWidth;
    carousel.style.transform = 'translateX(' + offset + 'px)';
}

// Event listeners para botões de navegação
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
