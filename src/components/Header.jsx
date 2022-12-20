import React from "react";

import { Link } from "react-router-dom";
import logo from "../img/Company-logo.svg";
import { bhremove, NavMainHide } from "../js/scripts";

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
        <Link
          className={props.mlink}
          to="/"
          title="Главная"
        >
          Главная
        </Link>
        <Link
          className={props.comlink}
          to="/company"
          title="Компания"
          onClick={() => {
            bhremove();
          }}
        >
          Компания
        </Link>
        <Link
          className={props.glink}
          to="/games"
          title="Игры"
          onClick={() => {
            bhremove();
          }}
        >
          Игры
        </Link>
        <Link
          className={props.carlink}
          to="/career"
          title="Карьера"
          onClick={() => {
            bhremove();
          }}
        >
          Карьера
        </Link>
        <Link
          className={props.nlink}
          to="/news"
          title="Новости"
          onClick={() => {
            bhremove();
          }}
        >
          Новости
        </Link>
        <Link
          className={props.conlink}
          to="/contacts"
          title="Контакты"
          onClick={() => {
            bhremove();
          }}
        >
          Контакты
        </Link>
      </nav>
      <div className="lang-sw">
        <Link to="/" title="Switch language" onClick={() => {
            bhremove();
          }}>
          ENG
        </Link>
      </div>
    </>
  );
}
