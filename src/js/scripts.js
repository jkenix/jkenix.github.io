// Main func active Nav
export function NavActive() {
  let ham = document.querySelector(".hamburger");
  let body = document.querySelector("body");
  let header = document.querySelector(".l-header");
  let headermenu = document.querySelector(".header-menu");

  ham.classList.toggle("ham-is-active");
  body.classList.toggle("overflow-is-hidden");
  header.classList.toggle("head-is-switch");
  headermenu.classList.toggle("nav-is-active");

  headermenu.onclick = function () {
    if (window.innerWidth < 768) {
      NavActive();
    }
  };
}