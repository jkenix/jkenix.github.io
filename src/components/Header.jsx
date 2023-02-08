import { main } from "@popperjs/core";
import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/feni-logo.svg";
import { NavActive } from "../js/scripts";

export default function Header(props) {
  return (
    <>
      <header className="l-header">
        <div className="l-header-wr">
          <Link className="logo" to="/">
            <img
              src={logo}
              alt="Feni logo"
              width="65"
              height="65"
              title="Feni"
            />
          </Link>
          <nav
            className="header-menu"
            >
            <Link className="nav-item" to="/" title="Главная">
              Портфолио
            </Link>
            <Link className="nav-item" to="/company" title="Компания">
              Услуги и цены
            </Link>
            <Link className="nav-item" to="/games" title="Игры">
              Мы
            </Link>
            <Link className="nav-item" to="/contacts" title="Контакты">
              Контакты
            </Link>
          </nav>
          <Link className="feni-tel" title="Call" href="#" >
          +38 (097) 757 51 51
          </Link>
          <Link
            className="btn-head btn-b55 btn-link"
            title="Click to order"
            href="#">
            Обсудить проект
          </Link>
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
