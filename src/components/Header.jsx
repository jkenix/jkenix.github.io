import React from "react";

import { NavLink, Link } from "react-router-dom";
import { bhremove } from "../js/scripts";

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
        <NavLink
          to="/"
          title="Главная"
          onClick={() => {
            bhremove();
          }}>
          Главная
        </NavLink>
        <NavLink
          to="/company"
          title="Компания"
          onClick={() => {
            bhremove();
          }}>
          Компания
        </NavLink>
        <NavLink
          to="/games"
          title="Игры"
          onClick={() => {
            bhremove();
          }}>
          Игры
        </NavLink>
        <NavLink
          to="/career"
          title="Карьера"
          onClick={() => {
            bhremove();
          }}>
          Карьера
        </NavLink>
        <NavLink
          to="/news"
          title="Новости"
          onClick={() => {
            bhremove();
          }}>
          Новости
        </NavLink>
        <NavLink
          to="/contacts"
          title="Контакты"
          onClick={() => {
            bhremove();
          }}>
          Контакты
        </NavLink>
      </nav>
      <Link className="btn lang-sw" to="/" title="Switch language">
        ENG
      </Link>
    </>
  );
}
