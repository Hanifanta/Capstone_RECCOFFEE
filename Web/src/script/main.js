import './components/shop-grid.js';
import './components/corousel.js';
import './components/team-list';
import githubImg from '../assets/images/GitHub-logo.png';

const main = () => {
  setNavbar();
  setFooter();
}

// formerly navbar.js
const setNavbar = () => {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      const navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
}

const setFooter = () => {
  const footer = document.getElementById('foot');
  
  const githubImageElement = new Image();
  githubImageElement.src = githubImg;
  footer.appendChild(githubImageElement);
}

export default main;