function initCarousel() {
  const carousel = document.querySelector(".carousel");
  const carouselInner = carousel.querySelector(".carousel__inner");
  const slides = carouselInner.querySelectorAll(".carousel__slide");
  const arrowRight = carousel.querySelector(".carousel__arrow_right");
  const arrowLeft = carousel.querySelector(".carousel__arrow_left");

  let currentSlide = 0;
  const totalSlides = slides.length;
  const slideWidth = carouselInner.offsetWidth;

  function updateArrows() {
    arrowLeft.style.display = currentSlide === 0 ? "none" : "";
    arrowRight.style.display = currentSlide === totalSlides - 1 ? "none" : "";
  }

  function moveSlide(direction) {
    currentSlide += direction;
    carouselInner.style.transform = `translateX(-${
      currentSlide * slideWidth
    }px)`;
    updateArrows();
  }

  arrowRight.addEventListener("click", () => moveSlide(1));
  arrowLeft.addEventListener("click", () => moveSlide(-1));

  updateArrows();
}