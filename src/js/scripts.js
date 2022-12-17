/* Def show menu scripts. Common for all pages. */
export function ShowMenu() {
  let ham = document.querySelector(".hamburger");
  let main = document.querySelector(".l-main");

  ham.classList.toggle("ham-active");
  main.classList.toggle("slv-active");
}
/* Nav active scripts. Delete background */
// Main page
export function NavActiveMain() {
  let headermenu = document.querySelector(".header-menu");
  let gawr = document.querySelector(".l-ga-wr");

  headermenu.classList.toggle("nav-active");
  headermenu.classList.toggle("nav-active-main");
  gawr.classList.toggle("dnone-main");
}
// // About company page
export function NavActiveAc() {
  let headermenu = document.querySelector(".header-menu");
  let cawr = document.querySelector(".l-ca-wr");

  headermenu.classList.toggle("nav-active");
  headermenu.classList.toggle("nav-active-ac");
  cawr.classList.toggle("dnone-com");
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
