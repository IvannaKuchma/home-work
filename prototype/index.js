function SliderPrototype(config) {
    this.slider = document.getElementById('slider');
    this.images = config.images;
    this.autoPlayInterval = config.interval || 3000;
    this.showIndicators = config.showIndicators !== false;
    this.currentIndex = 0;
    this.isPaused = false;
    this.intervalId = null;
  
    this.init();
  }
  
  SliderPrototype.prototype.init = function () {
    this.createMarkup();
    this.slides = this.slider.querySelector('.slides');
    this.slideElements = this.slider.querySelectorAll('.slide');
    this.updateSlide();
    this.startAutoSlide();
    this.addEvents();
  };
  
  SliderPrototype.prototype.createMarkup = function () {
    this.slider.innerHTML = `
      <div class="slides">
        ${this.images.map(img => `<div class="slide"><img src="${img}"></div>`).join('')}
      </div>
      <div class="controls">
        <button id="prev">&#10094;</button>
        <button id="next">&#10095;</button>
      </div>
      ${this.showIndicators ? `<div class="indicators" id="indicators"></div>` : ''}
      <button class="pause-btn" id="pauseBtn">Пауза</button>
    `;
  
    if (this.showIndicators) this.updateIndicators();
  };
  
  SliderPrototype.prototype.updateSlide = function () {
    this.slides.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    if (this.showIndicators) this.updateIndicators();
  };
  
  SliderPrototype.prototype.updateIndicators = function () {
    const indicators = this.slider.querySelector('#indicators');
    if (!indicators) return;
    indicators.innerHTML = '';
    this.images.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'indicator' + (i === this.currentIndex ? ' active' : '');
      dot.addEventListener('click', () => this.goToSlide(i));
      indicators.appendChild(dot);
    });
  };
  
  SliderPrototype.prototype.goToSlide = function (index) {
    if (index < 0) index = this.images.length - 1;
    if (index >= this.images.length) index = 0;
    this.currentIndex = index;
    this.updateSlide();
  };
  
  SliderPrototype.prototype.nextSlide = function () {
    this.goToSlide(this.currentIndex + 1);
  };
  SliderPrototype.prototype.prevSlide = function () {
    this.goToSlide(this.currentIndex - 1);
  };
  
  SliderPrototype.prototype.startAutoSlide = function () {
    this.intervalId = setInterval(() => {
      if (!this.isPaused) this.nextSlide();
    }, this.autoPlayInterval);
  };
  SliderPrototype.prototype.stopAutoSlide = function () {
    clearInterval(this.intervalId);
  };
  
  SliderPrototype.prototype.addEvents = function () {
    this.slider.querySelector('#next').addEventListener('click', () => this.nextSlide());
    this.slider.querySelector('#prev').addEventListener('click', () => this.prevSlide());
    this.slider.querySelector('#pauseBtn').addEventListener('click', () => {
      this.isPaused = !this.isPaused;
      this.slider.querySelector('#pauseBtn').textContent = this.isPaused ? 'Відновити' : 'Пауза';
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') this.nextSlide();
      if (e.key === 'ArrowLeft') this.prevSlide();
    });
  
    let startX = 0;
    let isDragging = false;
  
    this.slider.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });
  
    this.slider.addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;
      if (isDragging) {
        if (startX - endX > 50) this.nextSlide();
        if (endX - startX > 50) this.prevSlide();
        isDragging = false;
      }
    });
  
    this.slider.addEventListener('mouseenter', () => this.isPaused = true);
    this.slider.addEventListener('mouseleave', () => this.isPaused = false);
  };
  
  class EnhancedSlider extends SliderPrototype {
    constructor(config) {
      super(config);

    }
  }

  new EnhancedSlider({
    images: [
      './images/foto1.webp',
      './images/foto2.jpg',
      './images/foto3.jpg.avif',
      './images/foto4.jpg',
      './images/foto5.jpg'
    ],
    interval: 5000,
    showIndicators: true
  });
  