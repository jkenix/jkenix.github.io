// Vanilla scripts js
// Yellow bg def and switch

// Глобальная переменная нужна
export function ShowMenu() {
  let body = document.querySelector("body");
  let ham = document.querySelector(".hamburger");
  let headermenu = document.querySelector(".header-menu");
  let main = document.querySelector(".l-main");

  body.classList.toggle("overflow-hidden");
  ham.classList.toggle("ham-active");
  headermenu.classList.toggle("nav-active");
  main.classList.toggle("slv-active");
}

export function ShowMenuylg() {
  let header = document.querySelector(".l-header");
  header.classList.toggle("ylg-bg");
}

// export function headerswy() {
//     let body = document.querySelector("body");

//   }
