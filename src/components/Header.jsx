import React from "react";

import { Link } from "react-router-dom";
import logo from "../img/Company-logo.svg";

export default function Header(props) {
  return (
    <>
      <Link className="logo" to="/">
        <img
          src={logo}
          alt="Toy.Stream logo"
          width="135"
          height="75"
          title="Toy.Stream"
        />
      </Link>
      <nav className="header-menu">
        <Link className={props.mlink} to="/" title="Главная">
          Главная
        </Link>
        <Link
          className={props.comlink}
          to="/company"
          title="Компания"
        >
          Компания
        </Link>
        <Link className={props.glink} to="/games" title="Игры">
          Игры
        </Link>
        <Link className={props.carlink} to="/career" title="Карьера">
          Карьера
        </Link>
        <Link className={props.nlink} to="/news" title="Новости">
          Новости
        </Link>
        <Link className={props.conlink} to="/contacts" title="Контакты">
          Контакты
        </Link>
      </nav>
      <div className="lang-sw">
        <Link to="/" title="Switch language">
          ENG
        </Link>
      </div>
    </>
  );
}
