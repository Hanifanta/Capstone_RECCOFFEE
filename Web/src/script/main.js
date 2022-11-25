import $ from "jquery";
import "./components/corousel.js";
import "./components/shop-grid.js";
import "./components/team-list";
// images import for WebPack
import githubImg from "../assets/images/Github-logo.png";
import coffeeIcon from "../assets/images/Icon-recoffe.png";
import aboutImg from "../assets/images/pictureAbout.png";

const main = () => {
  setNavbar();
  loadImages();
  api();
};

// formerly navbar.js
const setNavbar = () => {
  $(".nav-link").on("click", function () {
    $(".navbar-toggler").toggleClass("collapsed");
    $(".navbar-collapse").removeClass("show");
  });
  const navbar_height = document
    .querySelector(".navbar")
    .getBoundingClientRect().height;

  document.documentElement.style.setProperty(
    "--scrll-padding",
    `${navbar_height - 1}px`
  );
};

const loadImages = () => {
  const coffeeIconElement = new Image();
  coffeeIconElement.src = coffeeIcon;
  coffeeIconElement.width = 30;
  coffeeIconElement.height = 24;
  coffeeIconElement.alt = "RecCoffee";
  $(".navbar-brand")[0].appendChild(coffeeIconElement);

  const aboutImageElement = new Image();
  aboutImageElement.src = aboutImg;
  aboutImageElement.classList.add("img-fluid");
  aboutImageElement.classList.add("w-100");
  $("#picture-about")[0].appendChild(aboutImageElement);

  const githubImageElement = new Image();
  githubImageElement.src = githubImg;
  $("#foot")[0].appendChild(githubImageElement);
};

const api = () => {
  const baseUrl = 'https://flask-production-30b0.up.railway.app';

  document.getElementById("find-coffee").addEventListener("click", () => {
    const aroma = document.getElementById('aroma').value;
    const acid = document.getElementById('acid').value;
    const body = document.getElementById('body').value;
    const flavor = document.getElementById('flavor').value;
    const aftertaste = document.getElementById('aftertaste').value;

    const data = {
      aroma,
      acid,
      body,
      flavor,
      aftertaste
    };

    predict(`${baseUrl}/predict`, 'POST', data, (data) => {
      document.getElementById('hasil-rekomendasi-container').innerHTML = `
        <div class="hasil-rekomendasi p-5 m-auto d-grid">
          <div class="row">
            <div class="rating text-center col-4 col-lg-2 d-grid">
              <p class="m-0 mt-auto">Rating</p>
              <h1 class="mb-auto">${data.rating}</h1>
            </div>
            <div class="col-8 col-lg-10 d-grid">
              <h1 class="m-0 mt-auto">${data.name}</h1>
              <p class="m-0 mb-auto">${data.roaster}</p>
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
              <p>${data.aroma}</p>
              <p>${data.acid}</p>
              <p>${data.body}</p>
              <p>${data.flavor}</p>
              <p>${data.aftertaste}</p>
            </div>
            <div class="col-12 col-lg-6 d-flex">
              <div class="desc-hasil d-flex flex-column">
                <p>
                  <span class="fw-bold">Description :</span> ${data.desc_1}
                </p>
              </div>
            </div>
          </div>
          <button id="btnRecom" class="btn btn-sm btn-primary text-white fw-bold me-auto">
            See other coffee
          </button>
        </div>
      `;
    });
  });
}

const predict = async (url, method, body, _callback) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const data = await response.json();
  console.log(data);
  _callback(data);
}

export default main;