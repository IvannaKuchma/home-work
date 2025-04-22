class Slider {
    constructor(config) {
      this.slider = document.getElementById('slider');
      this.images = config.images;
      this.autoPlayInterval = config.interval || 3000;
      this.showIndicators = config.showIndicators !== false;
      this.currentIndex = 0;
      this.isPaused = false;
      this.intervalId = null;
  
      this.init();
    }
  
    init() {
      this.createMarkup();
      this.slides = this.slider.querySelector('.slides');
      this.slideElements = this.slider.querySelectorAll('.slide');
      this.updateSlide();
      this.startAutoSlide();
      this.addEvents();
    }
  
    createMarkup() {
      this.slider.innerHTML = `
        <div class="slides">
          ${this.images.map(img => `<div class="slide"><img src="\${img}"></div>`).join('')}
        </div>
        <div class="controls">
          <button id="prev">&#10094;</button>
          <button id="next">&#10095;</button>
        </div>
        ${this.showIndicators ? `<div class="indicators" id="indicators"></div>` : ''}
        <button class="pause-btn" id="pauseBtn>stop</button>
      `;
  
      if (this.showIndicators) this.updateIndicators();
    }
  
    updateSlide() {
      this.slides.style.transform = `translateX(-${this.currentIndex * 100}%)`;
      if (this.showIndicators) this.updateIndicators();
    }
  
    updateIndicators() {
      const indicators = this.slider.querySelector('#indicators');
      if (!indicators) return;
      indicators.innerHTML = '';
      this.images.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'indicator' + (i === this.currentIndex ? ' active' : '');
        dot.addEventListener('click', () => this.goToSlide(i));
        indicators.appendChild(dot);
      });
    }
  
    goToSlide(index) {
      if (index < 0) index = this.images.length - 1;
      if (index >= this.images.length) index = 0;
      this.currentIndex = index;
      this.updateSlide();
    }
  
    nextSlide() {
      this.goToSlide(this.currentIndex + 1);
    }
  
    prevSlide() {
      this.goToSlide(this.currentIndex - 1);
    }
  
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        if (!this.isPaused) this.nextSlide();
      }, this.autoPlayInterval);
    }
  
    stopAutoSlide() {
      clearInterval(this.intervalId);
    }
  
    addEvents() {
      this.slider.querySelector('#next').addEventListener('click', () => this.nextSlide());
      this.slider.querySelector('#prev').addEventListener('click', () => this.prevSlide());
      this.slider.querySelector('#pauseBtn').addEventListener('click', () => {
        this.isPaused = !this.isPaused;
        this.slider.querySelector('#pauseBtn').textContent = this.isPaused ? 'Start' : 'stop';
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
    }
  }
  
  new Slider({
    images: [
      './i',
      './images/foto2.jpg',
      './images/foto3.jpg.avif',
      './images/foto4.jpg',
      './images/foto5.jpg'
    ],
    interval: 7000,
    showIndicators: true
  });
  