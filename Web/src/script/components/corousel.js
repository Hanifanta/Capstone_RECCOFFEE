import Glide from "@glidejs/glide";

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

// console.log(screen.width);
// glideMulti1.mount();
