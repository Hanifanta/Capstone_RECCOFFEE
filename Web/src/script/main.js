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
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      const navbar_height = document
        .querySelector(".navbar")
        .getBoundingClientRect().height;

      document.documentElement.style.setProperty(
        "--scrll-padding",
        `${navbar_height}px`
      );

      document.getElementById("navbar_top").classList.add("fixed-top");
      this.document.body.style.marginTop = `${navbar_height}px`;
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      this.document.body.style.marginTop = "0";
    }
  });
};

const loadImages = () => {
  const navbarBrand = document.querySelector(".navbar-brand");
  const pictureAbout = document.getElementById("picture-about");
  const footer = document.getElementById("foot");

  const coffeeIconElement = new Image();
  coffeeIconElement.src = coffeeIcon;
  coffeeIconElement.width = 30;
  coffeeIconElement.height = 24;
  coffeeIconElement.alt = "RecCoffee";
  navbarBrand.appendChild(coffeeIconElement);

  const aboutImageElement = new Image();
  aboutImageElement.src = aboutImg;
  aboutImageElement.classList.add("img-fluid");
  aboutImageElement.classList.add("w-100");
  pictureAbout.appendChild(aboutImageElement);

  const githubImageElement = new Image();
  githubImageElement.src = githubImg;
  footer.appendChild(githubImageElement);
};

export default main;
