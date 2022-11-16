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

export default main;
