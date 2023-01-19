/* Def menu scripts.\*/
// Common show menu script
let body = document.querySelector("body");
let ham = document.querySelector(".hamburger");

// Main func active Nav
ham.onclick = function (NavActive) {
  let headermenu = document.querySelector(".header-menu");
  let btnhead = document.querySelector(".btn-head");
  ham.classList.toggle("ham-is-active");
  body.classList.toggle("overflow-is-hidden");
  headermenu.classList.toggle("nav-is-active");
  btnhead.classList.toggle("bh-is-active");

  headermenu.addEventListener("click", function () {
    var currentTarget = event.target;
    // If you want A to be clickable
    if (currentTarget.tagName === "A") {
      let body = document.querySelector("body");
      body.classList.remove("overflow-is-hidden");
      headermenu.classList.remove("nav-is-active");
      ham.classList.remove("ham-is-active");
      btnhead.classList.remove("bh-is-active");
    }
  });
};
