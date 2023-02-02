//  Preloader
window.addEventListener("load", (event) => {
  document.querySelector(".l-preloader").remove("l-preloader");
});
/* Lazy load scripts */
// Init lazyload
// var lazyLazy = function () {
  
// };
// // Variables delete src elements
// let bordimg = document.querySelector(".bord-img img");
// let bookcopy = document.querySelector(".book-copy-img img");
// let bord = document.querySelector(".bord-img img");
// // Run Lazy load, if width > 1024
// if (window.innerWidth > 1024) {
//   lazyLazy();
// }
// // Remove and show src
// if (window.innerWidth < 1024) {
//   bordimg.removeAttribute("src");
//   bookcopy.removeAttribute("src");
// }
// window.onresize = function (event) {
//   if (window.innerWidth > 1024) {
//     lazyLazy();
//   }
// };
/* Def menu scripts. */
// Common show menu variables
let header = document.querySelector(".l-header");
let body = document.querySelector("body");
let ham = document.querySelector(".hamburger");
// Main func active Nav
ham.onclick = function (NavActive) {
  let headermenu = document.querySelector(".header-menu");
  ham.classList.toggle("ham-is-active");
  body.classList.toggle("overflow-is-hidden");
  headermenu.classList.toggle("nav-is-active");

  headermenu.addEventListener("click", function () {
    var currentTarget = event.target;
    function CloseMenu() {
      let body = document.querySelector("body");
      body.classList.remove("overflow-is-hidden");
      headermenu.classList.remove("nav-is-active");
      ham.classList.remove("ham-is-active");
    }
    CloseMenu(); // Close menu, if click on empty space hmenu
    // Close menu, if click on a elements of hmenu
    if (currentTarget.tagName === "A") {
      CloseMenu();
    }
  });
};

// Show/Remove scroll
window.addEventListener(
  "scroll",
  function (Scroll) {
    if (window.scrollY > 100) {
      header.classList.add("header-scroll");
    } else if (window.scrollY < 100) {
      header.classList.remove("header-scroll");
    }
  },
  true
);
