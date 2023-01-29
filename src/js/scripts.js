window.addEventListener("load", (event) => {
  document.querySelector(".l-preloader").remove("l-preloader");
});
/* Def menu scripts.\*/
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
      // history.pushState("", document.title, window.location.pathname);
    }
  },
  true
);