require("../../index.html");
import Swiper from "./swiper-bundle.min.js";
// Slider active
let listArray = ["slide1", "slide2", "slide3"];
let swiper3 = new Swiper(".pagination__container", {
  loop: true,
  autoplayDisableOnInteraction: false,
  slidesPerView: 1,
  autoHeight: true,
  autoplay: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    type: "bullets",
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        "<em>" +
        listArray[index] +
        "</em>" +
        "<i></i>" +
        "<b></b>" +
        "</span>"
      );
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
