class CorouselItem extends HTMLElement {
  set coffe(item) {
    this._coffe = item;
    this.render();
  }

  render() {
    this.innerHTML = `
      <li class="glide__slide">
        <img
          src="${this._coffe.image}"
          class="w-100"
        />
        <h2 class="ppns fw-semibold">${this._coffe.title}</h2>
        <p class="ppns">
          ${this._coffe.description}
        </p>
      </li>
    `;
  }
}

customElements.define("corousel-item", CorouselItem);
