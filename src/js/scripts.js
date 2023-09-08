/* Def menu scripts. Common for all pages. */
// Common show menu script
export function ShowMenu() {
  let ham = document.querySelector(".hamburger");
  let main = document.querySelector(".l-main");

  ham.classList.toggle("ham-active");
  main.classList.toggle("slv-active");
}
// Remove class overflow-hidden from body (on click on other pages except main)
export function bhremove() {
  let body = document.querySelector("body");
  body.classList.remove("overflow-hidden");
}

/* Nav active common scripts */
// Add and delete class overflow-hidden from body, if click on hamburger
export function bodyhide() {
  let body = document.querySelector("body");
  body.classList.toggle("overflow-hidden");
}
// Main func active Nav
export function NavActive() {
  window.headermenu = document.querySelector(".header-menu");
  let langsw = document.querySelector(".lang-sw");
  bodyhide();
  headermenu.classList.toggle("nav-active");
  langsw.classList.toggle("link-active");
}

/* Toggle background on active menu */
// Main page
export function ShowMenuylg() {
  let header = document.querySelector(".l-header");
  header.classList.toggle("ylg-bg");
}
// About company page
export function ShowMenuylgcom() {
  let header = document.querySelector(".l-header");
  header.classList.toggle("ylg-bg-com");
}
// Games/Career pages
export function ShowMenubclg() {
  let header = document.querySelector(".l-header");
  header.classList.toggle("bclg-bg");
}
