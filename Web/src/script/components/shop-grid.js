import "./shop-item.js";

class ShopGrid extends HTMLElement {
  // connectedCallback() {
  //   this.render();
  // }

  set products(products){
    this._products = products;
    this.render();
  }

  render() {
    for (let i = 0; i < 10; i++) {
      const shopItem = document.createElement("shop-item");
      shopItem.product = this._products[i];
      this.appendChild(shopItem);
    }
  }
}

customElements.define("shop-grid", ShopGrid);
