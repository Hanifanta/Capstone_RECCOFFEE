import $ from "jquery";
class Hasil extends HTMLElement {
  set hasilnya(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.classList.add("hasil-rekomendasi", "p-5", "m-auto", "d-grid");
    this.innerHTML = `
       
              <div class="row">
                <div class="rating text-center col-4 col-lg-2 d-grid">
                  <p class="m-0 mt-auto">Rating</p>
                  <h1 class="mb-auto">${this._item.rating}</h1>
                </div>
                <div class="col-8 col-lg-10 d-grid">
                  <h1 class="m-0 mt-auto">${this._item.name}</h1>
                  <p class="m-0 mb-auto">${this._item.origin}</p>
                </div>
              </div>
              <div class="row my-3">
                <div class="para col-6 col-lg-3">
                  <p>Aroma</p>
                  <p>Acid</p>
                  <p>Body</p>
                  <p>Flavor</p>
                  <p>AfterTaste</p>
                </div>
                <div class="col-6 col-lg-3">
                  <p>${this._item.aroma}</p>
                  <p>${this._item.acid_or_milk}</p>
                  <p>${this._item.body}</p>
                  <p>${this._item.flavor}</p>
                  <p>${this._item.aftertaste}</p>
                </div>
                <div class="col-12 col-lg-6 d-flex">
                  <div class="desc-hasil d-flex flex-column">
                    <p>
                      <span class="fw-bold">Description :</span>
                      ${this._item.desc_1}
                    </p>
                  </div>
                </div>
              </div>
              <button id="button-other-coffee" class="btn btn-sm btn-primary text-white fw-bold me-auto">
                See other coffee
              </button>
          
    `;
    const show = () => {
      $("#recommendation").toggleClass("d-none");
    };
    this.querySelector("#button-other-coffee").addEventListener("click", show);
  }
}
customElements.define("hasil-result", Hasil);
