import $ from "jquery";

import "./components/corousel-list.js";
import "./components/hasil-rekomendasi.js";
import "./components/recommendation-list.js";
import "./components/team-list.js";

// images import for WebPack
import githubImg from "../assets/images/GitHub-logo.png";
import coffeeIcon from "../assets/images/Icon-recoffe.png";
import aboutImg from "../assets/images/pictureAbout.png";
import favIcon from "../assets/images/favicon.png";

const main = () => {
  setFavIcon();
  setNavbar();
  loadImages();
  setButtonsListener();
};

// formerly navbar.js
const setNavbar = () => {
  $(".nav-link").on("click", function () {
    $(".navbar-toggler").toggleClass("collapsed");
    $(".navbar-collapse").removeClass("show");
    $(".navbar-nav").find("a.active").removeClass("active");
    $(this).addClass("active");
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
  githubImageElement.title = "GitHub.com";
  githubImageElement.style.cursor = "pointer";

  $(githubImageElement).on("click", () => {
    window.open("https://github.com/Hanifanta/Capstone_RECCOFFEE", "_blank");
  });
  $("#foot")[0].appendChild(githubImageElement);
};

const setButtonsListener = () => {
  //button search

  $("#button-search").on("click", () => {
    const aroma = $("#aroma").val();
    const acid = $("#acid").val();
    const body = $("#body").val();
    const flavor = $("#flavor").val();
    const afterTaste = $("#after-taste").val();

    const inputData = {
      aroma: aroma,
      acid_or_milk: acid,
      body: body,
      flavor: flavor,
      aftertaste: afterTaste,
    };

    performSearch(inputData);
  });
};

const performSearch = (data) => {
  const baseUrl = "https://reccoffee-backend.up.railway.app/";

  // ML API request
  $.post({
    url: `${baseUrl}/predict`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
    beforeSend: () => {
      // ketika request akan dikirin
    },
    complete: () => {
      // ketika request selesai
      // sebelum succes/ error
    },
    success: (response) => {
      renderPredictionResult(response);
      renderRecommendationResult(response);
    },
    error: (err) => {
      alert(err);
    },
  });
};

const startAnimateCounters = () => {
  $(".hasil-rekomendasi").addClass("p-5 anim");
};

const renderPredictionResult = (response) => {
  const hasilItem = document.createElement("hasil-result");
  hasilItem.hasilnya = response;
  $(".hasil-rekomendasi-container").empty().append(hasilItem);

  startAnimateCounters();
  $(".hasil-rekomendasi-container")[0].scrollIntoView();
};

const renderRecommendationResult = (response) => {
  const recommendationList = document.createElement("recommendation-list");
  recommendationList.data = response;
  $("#recom-container").empty().append(recommendationList);
};

const setFavIcon = () => {
  const documentHead = document.querySelector("head");
  const faviconLink = document.createElement("link");
  faviconLink.setAttribute("rel", "shortcut icon");
  faviconLink.setAttribute("href", favIcon);
  documentHead.appendChild(faviconLink);
};

export default main;
