import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Company-logo.svg";
import headerswy from "../js/scripts";

export default function Header(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
    let body = document.querySelector("body");
    let main = document.querySelector(".l-main");
    body.classList.toggle("overflow-hidden");
    main.classList.toggle("slv-active");
  };
  return (
    <>
      <header className="l-header">
        <div
          className={`hamburger ${isActive ? "ham-active" : ""}`}
          onClick={() => {handleClick(); headerswy()}}
        >
          <span className="hamburger-item"></span>
        </div>
        <Link className="logo" to="/">
          <img
            src={logo}
            alt="Toy.Stream logo"
            width="135"
            height="75"
            title="Toy.Stream"
          />
        </Link>
        <nav
          className={`header-menu ${isActive ? "nav-active" : ""}`}
          onClick={handleClick}
        >
          <Link className={props.mlink} to="/" title="Главная">
            Главная
          </Link>
          <Link className={props.comlink} to="/company" title="Компания">
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
      </header>
    </>
  );
}
