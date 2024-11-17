import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.createCard();
  }

  createCard() {
    const card = createElement(`
      <div class="card">
        ${this.createCardTop()}
        ${this.createCardBody()}
      </div>
    `);

    this.initEventListeners(card);

    return card;
  }

  createCardTop() {
    return `
      <div class="card__top">
        <img src="/assets/images/products/${
          this.product.image
        }" class="card__image" alt="product">
        <span class="card__price">€${this.product.price.toFixed(2)}</span>
      </div>
    `;
  }

  createCardBody() {
    return `
      <div class="card__body">
        <div class="card__title">${this.product.name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    `;
  }

  initEventListeners(card) {
    const cardButton = card.querySelector(".card__button");

    cardButton.addEventListener("click", () => this.onProductAdd(card));
  }

  onProductAdd(card) {
    const productAddEvent = new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true,
    });

    card.dispatchEvent(productAddEvent);
  }
}
