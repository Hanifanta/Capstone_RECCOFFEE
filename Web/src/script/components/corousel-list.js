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
    <div class="corousel d-flex align-items-center justify-content-center">
          <div class="glide">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
              </ul>
            </div>
          </div>
        </div>
    `;

    const baseURLhot = "https://api.sampleapis.com/coffee/hot";
    const baseURLiced = "https://api.sampleapis.com/coffee/iced";
    Promise.all([fetch(baseURLiced), fetch(baseURLhot)])
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
        const imageurl = item.image.includes("https");
        if (imageurl) {
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
        autoplay: 3000,
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
