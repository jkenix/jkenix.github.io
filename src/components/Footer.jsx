import React from "react";
import { Link } from "react-router-dom";

import pinterest from "../img/pinterest.svg";
import Behance from "../img/Behance.svg";
import Dribbble from "../img/Dribbble.svg";
import Snapchat from "../img/Snapchat.svg";
import Linkedin from "../img/Linkedin.svg";
import Facebook from "../img/Facebook.svg";

function Footer() {
  return (
    <footer className="l-footer">
      <div className="l-contacts">
        <div className="company">
          <a
            href="https://www.figma.com/file/6kFNHvBorfCJrZ81w9gF82/%D0%9A%D0%B5%D0%BC%D0%B5%D0%BD%D0%B3%D0%B5%D1%80-%2B"
            title="Figma original layout link"
          >
            © Toy.Stream, Inc.
          </a>
        </div>
        <nav className="footer-menu">
          <Link to="/" title="Главная">Главная</Link>
          <Link to="/company" title="Компания">Компания</Link>
          <Link to="/games" title="Игры">Игры</Link>
          <Link to="/career" title="Карьера">Карьера</Link>
          <Link to="/news" title="Новости">Новости</Link>
          <Link to="/contacts" title="Контакты">Контакты</Link>
        </nav>
        <div className="social-links">
          <Link to="/" title="Контакты">
            <img src={pinterest} width={"24.99"} height={"24.99"} alt="pinterest" title="pinterest"></img>
          </Link>
          <Link to="/">
            <img src={Behance} width={"24.99"} height={"24.99"} alt="Behance" title="Behance"></img>
          </Link>
          <Link to="/">
            <img src={Dribbble} width={"24.99"} height={"24.99"} alt="Dribbble" title="Dribbble"></img>
          </Link>
          <Link to="/">
            <img src={Snapchat} width={"24.99"} height={"24.99"} alt="Snapchat" title="Snapchat"></img>
          </Link>
          <Link to="/">
            <img src={Linkedin} width={"24.99"} height={"24.99"} alt="Linkedin" title="Linkedin"></img>
          </Link>
          <Link to="/">
            <img src={Facebook} width={"24.99"} height={"24.99"} alt="Facebook" title="Facebook"></img>
          </Link>
        </div>
      </div>
      <div className="l-author">
        <address>
          Page created by
          <a href="https://github.com/jkenix" title="Github profile link">
            {" "}
            jkenix
          </a>
        </address>

        <a
          href="https://github.com/jkenix/jkenix.github.io/tree/interno"
          title="Github repo"
        >
          Repo link of this page
        </a>
      </div>
    </footer>
  );
}

export default Footer;
