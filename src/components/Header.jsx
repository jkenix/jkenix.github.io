import logo from "../img/Company-logo.svg";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    // event.currentTarget.classList.toggle("ham-active");
    setIsActive((current) => !current);
  };
  return (
    <>
      <header className="l-header">
        <div
          className={`hamburger ${isActive ? "ham-active" : ""}`}
          onClick={handleClick}
        >
          <span className="hamburger-item"></span>
        </div>
        <Link className="logo" to="/">
          <img src={logo} alt="Toy.Stream logo" width="135" height="75" />
        </Link>
        <nav
          className={`header-menu ${isActive ? "nav-active" : ""}`}
          onClick={handleClick}
        >
          <Link to="/">Главная</Link>
          <Link to="/company">Компания</Link>
          <Link to="/games">Игры</Link>
          <Link to="/career">Карьера</Link>
          <Link to="/news">Новости</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>
        <div className="lang-sw">
          <Link to="/">ENG</Link>
        </div>
      </header>
    </>
  );
}
