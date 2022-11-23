class ShopItem extends HTMLElement {
    connectedCallback() {
        this.classList.add('col');
        
        this.render();
    }

    render() {
        this.innerHTML = 
        `<div class="card shadow border-0 rounded-4 mx-2 my-3">
            
        </div>`;
    }
}

customElements.define('shop-item', ShopItem);