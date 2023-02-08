// Lazyload init
var myLazyLoad = new LazyLoad({ threshold: 0 });
/* Def menu scripts. */
// Common show menu variables
// export function bodyinit() {
//     window.body = document.querySelector("body");
// };

// export function haminit() {
//     window.ham = document.querySelector(".hamburger");
// };
// Main func active Nav
export function NavActive() {
  window.body = document.querySelector("body");
  let headermenu = document.querySelector(".header-menu");
  let ham = document.querySelector(".hamburger");
  let logo = document.querySelector(".logo");
  ham.classList.toggle("ham-is-active");
  body.classList.toggle("overflow-is-hidden");
  headermenu.classList.toggle("nav-is-active");
  logo.classList.toggle("elem-is-hide");
}
