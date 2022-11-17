import $ from "jquery";

class ShopItem extends HTMLElement {
    // connectedCallback() {
    //     this.render();
    // }

    set product(product){
        this._product = product;
        this.render();
    }

    render() {
        $(this).addClass("col");
        
        this.innerHTML = 
        `<div class="card shadow border-0 rounded-3">
            <img class="card-img-top mb-2" src=${this._product.product_photos[0]}> 
            <div class="card-body">
                <span class="card-title osw">${this._product.product_title}</span>
                <span class="card-subtitle ppns">${this._product.offer.price}</span>   
            </div>  
        </div>`;
    }
}

customElements.define('shop-item', ShopItem);