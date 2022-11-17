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
  getCoffeeProduct("kopi toraja");
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

const getCoffeeProduct = keyword => {
  const headers = {
    "X-RapidAPI-Key": "9fd999a328msh067a1d5f0078a52p140940jsn195a118590e1",
		"X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com"
  };
  keyword = keyword.replace(' ', '%20');

  $.get({
    url: `https://real-time-product-search.p.rapidapi.com/search?q=${keyword}&country=id&language=id`,
    headers: headers,
    beforeSend: () => {

    },
    complete: () => {

    },
    success: response => {
      renderShopProduct(response.data);
    },
    error: err => {
      alert(err);
    }
  });
};

const renderShopProduct = products => {
  const shopGrid = document.querySelector('shop-grid');
  shopGrid.products = products;
}

export default main;
