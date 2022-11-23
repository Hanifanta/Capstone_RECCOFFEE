import $ from "jquery";

class ShopItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        $(this).addClass("col");
        
        this.innerHTML = 
        `<div class="card shadow border-0 rounded-3">
            
        </div>`;
    }
}

customElements.define('shop-item', ShopItem);