import $ from "jquery";
class Hasil extends HTMLElement {
  set hasilnya(item) {
    console.log(item);
    this._item = item;
    this.render();
  }

  render() {
    this.classList.add("hasil-rekomendasi", "m-auto", "d-grid");
    this.innerHTML = `
       
              <div class="row">
                <div class="rating text-center col-4 col-lg-2 d-grid rounded-3">
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
                  <p>Acidity</p>
                  <p>Body</p>
                  <p>Flavor</p>
                  <p>Aftertaste</p>
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
                <div class="d-flex">
                  <button
                    id="button-other-coffee"
                    class="btn btn-sm btn-primary text-white fw-bold me-3"
                  >
                    See other coffee
                  </button>

                  <a
                    id="button-other-coffee"
                    class="btn btn-sm btn-primary text-white fw-bold me-auto"
                    target="_blank" 
                    href="https://www.google.com/search?tbm=shop&q=${this._item.name}+coffee">
                    Search on Google
                  </a>

                  <div class="ms-auto">
                  <a href="${this._item.link}" 
                  target="_blank" 
                  class="me-auto">
                  <i>Details ></i>
                  </a>
                  </div>

                </div>
              </div>
            
              
          
    `;
    const show = () => {
      $("#recommendation").toggleClass("d-none");
      $("#recommendation")[0].scrollIntoView();
    };
    this.querySelector("#button-other-coffee").addEventListener("click", show);
  }
}
customElements.define("hasil-result", Hasil);
