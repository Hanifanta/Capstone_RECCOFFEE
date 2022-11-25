import $ from "jquery";

class RecommendationItem extends HTMLElement {
    set id(id){
       this._id = id;
       this.render();
    }

    render() {
        this.innerHTML = 
            `<div class="accordion-item">
                <div class="accordion-header" id="heading-${this._id}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${this._id}" aria-expanded="false" aria-controls="collapse-${this._id}">
                <div class="d-flex">
                    <div class="recom-score rounded-3">
                    <strong>96</strong>
                    </div>
                </div>
                <div class="d-flex flex-column px-3">
                    <h2 class="osw recom-name text-dark">David's Nose</h2>
                    <span class="recom-origin text-dark">Honduras Blue Hole Estates</span>
                </div>
                </button>
            </div>
            <div id="collapse-${this._id}" class="accordion-collapse collapsed collapse align-content-start" aria-labelledby="heading-${this._id}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <div class="row d-flex
                justify-content-around">
                    <div class="col">
                    <h5>Aroma</h5>
                    <b>9</b>
                    </div>
                    <div class="col">
                    <h5>Acid</h5>
                    <b>9</b>
                    </div>
                    <div class="col">
                    <h5>Body</h5>
                    <b>9</b>
                    </div>
                    <div class="col">
                    <h5>Flavor</h5>
                    <b>9</b>
                    </div>
                    <div class="col">
                    <h5>Aftertaste</h5>
                    <b>9</b>
                    </div>
                </div>
                <div class="container-fluid text-start">
                    <p><strong>Description: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta commodi consectetur cum earum impedit omnis quaerat aspernatur id quae quasi ut rem, asperiores illo expedita voluptate sed blanditiis. Nihil, impedit?</p>
                </div>
                <button class="btn btn-sm btn-primary text-white fw-bold me-auto">
                    Search on Google
                </button>
                </div>
            </div>
  
            </div>`;
    }
}

customElements.define("recommendation-item", RecommendationItem);