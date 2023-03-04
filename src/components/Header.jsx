import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../img/feni-logo.svg";
// import { NavActive } from "../js/scripts";
function NavActive() {
  let ham = document.querySelector(".hamburger");
  let body = document.querySelector("body");
  let header = document.querySelector(".l-header");
  let headermenu = document.querySelector(".header-menu");

  ham.classList.toggle("ham-is-active");
  body.classList.toggle("overflow-is-hidden");
  header.classList.toggle("head-is-switch");
  headermenu.classList.toggle("nav-is-active");

  headermenu.addEventListener("click", function () {
    var currentTarget = event.target;
    // If click A elem - close menu
    if (currentTarget.tagName === "A") {
      NavActive();
    }
  });
}
export default function Header() {
  return (
    <>
      <header className="l-header">
        <div className="l-header-wr">
          <Link className="logo" to="/">
            <img src={logo} alt="Feni logo" width="65" height="65" loading="eager"/>
          </Link>
          <nav className="header-menu">
            <NavLink className="nav-item" to="/portfolio/all_works" title="Портфолио">
              Портфолио
            </NavLink>
            <NavLink className="nav-item" to="/services" title="Услуги и цены">
              Услуги и цены
            </NavLink>
            <NavLink className="nav-item" to="/about" title="О нас">
              Мы
            </NavLink>
            <NavLink className="nav-item" to="/contacts" title="Контакты">
              Контакты
            </NavLink>
          </nav>
          <div className="disc-head">
            <a
              href="tel:+38-097-757-5151"
              className="feni-tel"
              title="Позвонить">
              +38 (097) 757 51 51
            </a>
            <a
              href="#discuss-project"
              className="btn-head btn-link btn-b55 "
              title="Обсудить проект">
              Обсудить проект
            </a>
          </div>
          <div
            className="hamburger"
            onClick={() => {
              NavActive();
            }}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
}
