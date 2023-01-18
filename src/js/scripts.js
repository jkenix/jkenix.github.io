/* Def menu scripts.\*/
// Common show menu script
let body = document.querySelector("body");
let ham = document.querySelector(".hamburger");
let header = document.querySelector(".l-header");

// Main func active Nav
ham.onclick = function (NavActive) {
  let headermenu = document.querySelector(".header-menu");
  ham.classList.toggle("ham-is-active");
  body.classList.toggle("overflow-hidden");
  headermenu.classList.toggle("nav-is-active");

  headermenu.addEventListener("click", function () {
    var currentTarget = event.target;
    // If you want A to be clickable
    if (currentTarget.tagName === "A") {
      let body = document.querySelector("body");
      body.classList.remove("overflow-hidden");
      headermenu.classList.remove("nav-is-active");
      ham.classList.remove("ham-is-active");
    }
  });
};
