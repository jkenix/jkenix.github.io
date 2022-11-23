import logo from "../img/Company-logo.svg";
import { useEffect, useState } from "react";
import Ccomponent from "./Ccomponent.js";
import Afcomponent from "./Afcomponent.js";
import Fcomponent from "./Fcomponent.js";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger.jsx";

function Header() {
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
          onClick={handleClick}>
          <span className="hamburger-item"></span>
        </div>
        <Link className="logo" to="/">
          <img src={logo} alt="Toy.Stream logo" width="135" height="75" />
        </Link>
        {/* <Link className="logo" to="/About">
          sdsdds
        </Link> */}
        <nav
          className={`header-menu ${isActive ? "nav-active" : ""}`} onClick={handleClick}>
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

export default Header;
