const slider = document.getElementById('slider');
const slides = slider.querySelector('.slides');
const slideElements = slider.querySelectorAll('.slide');
const indicators = document.getElementById('indicators');
const pauseBtn = document.getElementById('pauseBtn');

let currentIndex = 0;
let interval = null;
let isPaused = false;
let startX = 0;
let isDragging = false;

function goToSlide(index) {
  if (index < 0) index = slideElements.length - 1;
  if (index >= slideElements.length) index = 0;
  slides.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
  updateIndicators();
}

function updateIndicators() {
  indicators.innerHTML = '';
  slideElements.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'indicator' + (i === currentIndex ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    indicators.appendChild(dot);
  });
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  goToSlide(currentIndex - 1);
}

function startAutoSlide() {
  interval = setInterval(() => {
    if (!isPaused) nextSlide();
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);
pauseBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? 'Відновити' : 'Пауза';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// Swipe support
slider.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  isDragging = true;
});
slider.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (isDragging) {
    if (startX - endX > 50) nextSlide();
    if (endX - startX > 50) prevSlide();
    isDragging = false;
  }
});

// Mouse drag
slider.addEventListener('mousedown', e => {
  startX = e.clientX;
  isDragging = true;
});
slider.addEventListener('mouseup', e => {
  const endX = e.clientX;
  if (isDragging) {
    if (startX - endX > 50) nextSlide();
    if (endX - startX > 50) prevSlide();
    isDragging = false;
  }
});

goToSlide(0);
startAutoSlide();
