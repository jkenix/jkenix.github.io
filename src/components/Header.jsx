import logo from "../img/Company-logo.svg";
import Ccomponent from "./Ccomponent.js";
import Afcomponent from "./Afcomponent.js";
import Fcomponent from "./Fcomponent.js";
import {Link} from "react-router-dom";
import Hamburger from "./Hamburger.jsx";

function Header() {
  return (
    <>
      <header className="l-header">
        <Hamburger />
        <Link className="logo" to="/">
          <img src={logo} alt="Toy.Stream logo" width="135" height="75" />
        </Link>
        {/* <Link className="logo" to="/About">
          sdsdds
        </Link> */}
        <nav className="header-menu">
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
