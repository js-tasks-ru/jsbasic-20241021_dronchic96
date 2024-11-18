import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlide = 0;
    this.elem = this.createCarousel();
  }

  createCarousel() {
    const carousel = createElement(`
      <div class="carousel">
        ${this.createArrows()}
        <div class="carousel__inner">
          ${this.slides.map((slide) => this.createSlide(slide)).join("")}
        </div>
      </div>
    `);

    this.carouselInner = carousel.querySelector(".carousel__inner");
    this.arrowRight = carousel.querySelector(".carousel__arrow_right");
    this.arrowLeft = carousel.querySelector(".carousel__arrow_left");

    this.initEventListeners();
    this.updateArrows();

    return carousel;
  }

  createArrows() {
    return `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `;
  }

  createSlide(slide) {
    return `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${
          slide.image
        }" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
  }

  initEventListeners() {
    this.arrowRight.addEventListener("click", () => this.moveSlide(1));
    this.arrowLeft.addEventListener("click", () => this.moveSlide(-1));
    this.carouselInner.addEventListener("click", (event) =>
      this.handleProductAdd(event)
    );
  }

  updateArrows() {
    this.arrowLeft.style.display = this.currentSlide === 0 ? "none" : "";
    this.arrowRight.style.display =
      this.currentSlide === this.slides.length - 1 ? "none" : "";
  }

  moveSlide(direction) {
    const slideWidth = this.carouselInner.offsetWidth;
    this.currentSlide += direction;
    this.carouselInner.style.transform = `translateX(-${
      this.currentSlide * slideWidth
    }px)`;
    this.updateArrows();
  }

  handleProductAdd(event) {
    const button = event.target.closest(".carousel__button");
    if (!button) return;

    const slideElement = button.closest(".carousel__slide");
    const slideId = slideElement.dataset.id;

    const productAddEvent = new CustomEvent("product-add", {
      detail: slideId,
      bubbles: true,
    });

    this.elem.dispatchEvent(productAddEvent);
  }
}
