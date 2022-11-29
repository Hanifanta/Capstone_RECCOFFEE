class RecommendationItem extends HTMLElement {
  set id(id) {
    this._id = id;
    this.render();
  }

  set info(info) {
    this._info = info;
  }

  render() {
    this.innerHTML = `<div class="accordion-item">
                <div class="accordion-header" id="heading-${this._id}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${this._id}" aria-expanded="false" aria-controls="collapse-${this._id}">
                <div class="d-flex">
                    <div class="recom-score rounded-3">
                    <strong>${this._info.rating}</strong>
                    </div>
                </div>
                <div class="d-flex flex-column px-3">
                    <h2 class="osw recom-name text-dark">${this._info.name}</h2>
                    <span class="recom-origin text-dark">${this._info.origin}</span>
                </div>
                </button>
            </div>
            <div id="collapse-${this._id}" class="accordion-collapse collapsed collapse align-content-start" aria-labelledby="heading-${this._id}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <div class="row d-flex
                justify-content-around">
                    <div class="col">
                    <h5>Aroma</h5>
                    <b>${this._info.aroma}</b>
                    </div>
                    <div class="col">
                    <h5>Acid</h5>
                    <b>${this._info.acid_or_milk}</b>
                    </div>
                    <div class="col">
                    <h5>Body</h5>
                    <b>${this._info.body}</b>
                    </div>
                    <div class="col">
                    <h5>Flavor</h5>
                    <b>${this._info.flavor}</b>
                    </div>
                    <div class="col">
                    <h5>Aftertaste</h5>
                    <b>${this._info.aftertaste}</b>
                    </div>
                </div>
                <div class="container-fluid text-start">
                    <p><strong>Blind Assessment: </strong>${this._info.desc_1}</p>
                </div>
                <div class="container-fluid text-start">
                    <p><strong>Notes: </strong>${this._info.desc_2}</p>
                </div>
                <div class="container-fluid text-start">
                    <p><strong>The Bottom Line: </strong>${this._info.desc_3}</p>
                </div>
                <a href="https://www.google.com/search?tbm=shop&q=${this._info.name}" target="_blank" class="btn btn-sm btn-primary text-white fw-bold me-auto btn-rounded">
                    Search on Google
                </a>
                <a href="${this._info.link}" target="_blank" class="btn btn-sm btn-primary  btn-rounded text-white fw-bold me-auto">
                    See detail coffee
                </a>
                </div>
            </div>
  
            </div>`;
  }
}

customElements.define("recommendation-item", RecommendationItem);
