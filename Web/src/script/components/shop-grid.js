import './shop-item.js';

class ShopGrid extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        for (let i = 0; i < 10; i++) {
            const shopItem = document.createElement('shop-item');
            this.appendChild(shopItem);
        }
    }
}

customElements.define('shop-grid', ShopGrid); 