import Glide from "@glidejs/glide";
import "./corousel-item.js";

class CorouselList extends HTMLElement {
  // set coffes(items) {
  //   this._coffes = items;
  //   this.render();
  // }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .glide__arrow {
      border-radius : 50%;
      padding:calc(10px + 0.1vw);
      background : rgba(255, 255, 255, 0.5);
    }
    
    @media screen and (max-width: 576px) {
      .glide__arrow {
        top: 36vh;
      }
    }
    </style>
    <div class="corousel d-flex align-items-center justify-content-center">
          <div class="glide">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
              </ul>
            </div>
            <div class="glide__arrows" data-glide-el="controls">
              <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path>
              </svg>
            </button>
              <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
              </svg>
            </button>
            </div>
          </div>
        </div>
    `;

    const baseURLhot = "https://api.sampleapis.com/coffee/hot";
    const baseURLiced = "https://api.sampleapis.com/coffee/iced";
    Promise.all([fetch(baseURLhot), fetch(baseURLiced)])
      .then((responses) => {
        return Promise.all(
          responses.map((response) => {
            return response.json();
          })
        );
      })
      .then((data) => {
        let datas = data;
        for (let index = 0; index < data.length; index++) {
          datas = data[index].concat(data[++index]);
        }
        displayData(datas);
      })
      .catch((error) => {
        console.log(error);
      });

    const displayData = (data) => {
      const seen = new Set();
      const filteredArr = data.filter((item) => {
        const duplicate = seen.has(item.description);
        if (item.image == null ? false : item.image.includes("https")) {
          seen.add(item.description);
          return !duplicate;
        }
      });

      filteredArr.forEach((item) => {
        const itemCoffeElement = document.createElement("corousel-item");
        itemCoffeElement.coffe = item;
        this.querySelector(".glide__slides").appendChild(itemCoffeElement);
      });

      new Glide(".glide", {
        type: "slider",
        hoverpause: false,
        perView: 3,
        bound: true,
        breakpoints: {
          1024: {
            perView: 2,
          },
          600: {
            perView: 1,
          },
        },
      }).mount();
    };
  }
}

customElements.define("corousel-list", CorouselList);
