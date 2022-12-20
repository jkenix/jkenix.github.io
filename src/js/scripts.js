/* Declaration variables scripts */ 
// Header-menu global declaration
function Hmenu() {
  window.headermenu = document.querySelector(".header-menu");
}
// Body global declaration
function bodyvar() {
  window.body = document.querySelector("body");
}

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
  bodyvar();
  body.classList.remove("overflow-hidden");
}

/* Nav active common scripts */
// Add and delete class overflow-hidden from body, if click on hamburger
export function bodyhide() {
  bodyvar();
  body.classList.toggle("overflow-hidden");
}
// Main func active Nav
export function NavActive() {
  Hmenu();
  bodyhide();
  headermenu.classList.toggle("nav-active");
}

/* Nav active specific scripts */
// Main page nav toggle
export function NavActiveMain() {
  Hmenu();
  headermenu.classList.toggle("nav-active-main");
}
// // About company page nav toggle
export function NavActiveAc() {
  Hmenu();
  headermenu.classList.toggle("nav-active-ac");
}

/* Toggle background on active menu */
// Main page
export function ShowMenuylg() {
  let header = document.querySelector(".l-header"); // Global variable?
  header.classList.toggle("ylg-bg");
}
// About company page
export function ShowMenuylgcom() {
  let header = document.querySelector(".l-header"); // Global variable?
  header.classList.toggle("ylg-bg-com");
}
