/* Def menu scripts.\*/
// Common show menu script
let ham = document.querySelector(".hamburger");

/* Toggle background on active menu */
// Main page
function ShowMenuylg() {
  let header = document.querySelector(".l-header");
  header.classList.toggle("ylg-bg");
}

/* Nav active common scripts */
// Add and delete class overflow-hidden from body, if click on hamburger
function bodyhide() {
  let body = document.querySelector("body");
  body.classList.toggle("overflow-hidden");
}
// Main func active Nav
ham.onclick = function (NavActive) {
  ham.classList.toggle("ham-active");
  let headermenu = document.querySelector(".header-menu");
  let langsw = document.querySelector(".lang-sw");
  bodyhide();
  ShowMenuylg();
  headermenu.classList.toggle("nav-active");
  langsw.classList.toggle("link-active");

  headermenu.onclick = function () { // Сделать класс внутри h-menu
    let body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
  };
};