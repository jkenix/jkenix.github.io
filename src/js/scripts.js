// Main func active Nav
export function NavActive() {
  let body = document.querySelector("body");
  let header = document.querySelector(".l-header");
  let headermenu = document.querySelector(".header-menu");
  let ham = document.querySelector(".hamburger");

  ham.classList.toggle("ham-is-active");
  body.classList.toggle("overflow-is-hidden");
  header.classList.toggle("head-is-switch");
  headermenu.classList.toggle("nav-is-active");
}
