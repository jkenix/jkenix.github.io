import React from "react";
import { Link } from "react-router-dom";

import pinterest from "../img/pinterest.svg";
import Behance from "../img/Behance.svg";
import Dribbble from "../img/Dribbble.svg";
import Snapchat from "../img/Snapchat.svg";
import Linkedin from "../img/Linkedin.svg";
import Facebook from "../img/Facebook.svg";

function Footer(props) {
  return (
    <footer className="l-footer">
      <div className="l-contacts">
        <div className="company">
          <a
            href="https://www.figma.com/file/0hfNUTOuJDRHGWilFAUkFV/Toy.Stream---%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF-(Copy)?t=TpUfLgFj0ACTCmEa-0"
            title="Figma original layout link">
            © Toy.Stream, Inc.
          </a>
        </div>
        <nav className="footer-menu">
          <Link to="/" title="Главная">
            Главная
          </Link>
          <Link to="/company" title="Компания">
            Компания
          </Link>
          <Link to="/games" title="Игры">
            Игры
          </Link>
          <Link to="/career" title="Карьера">
            Карьера
          </Link>
          <Link to="/news" title="Новости">
            Новости
          </Link>
          <Link to="/contacts" title="Контакты">
            Контакты
          </Link>
        </nav>
        <div className="social-links-hor">
          <Link to="/" title="Контакты">
            <img
              src={pinterest}
              width={"25"}
              height={"25"}
              alt="pinterest"
              title="pinterest"></img>
          </Link>
          <Link to="/">
            <img
              src={Behance}
              width={"25"}
              height={"25"}
              alt="Behance"
              title="Behance"></img>
          </Link>
          <Link to="/">
            <img
              src={Dribbble}
              width={"25"}
              height={"25"}
              alt="Dribbble"
              title="Dribbble"></img>
          </Link>
          <Link to="/">
            <img
              src={Snapchat}
              width={"25"}
              height={"25"}
              alt="Snapchat"
              title="Snapchat"></img>
          </Link>
          <Link to="/">
            <img
              src={Linkedin}
              width={"25"}
              height={"25"}
              alt="Linkedin"
              title="Linkedin"></img>
          </Link>
          <Link to="/">
            <img
              src={Facebook}
              width={"25"}
              height={"25"}
              alt="Facebook"
              title="Facebook"></img>
          </Link>
        </div>
      </div>
      <div className="l-author">
        <address>
          Website created by
          <a href="https://github.com/jkenix" title="Github profile link">
            {" "}
            jkenix
          </a>
        </address>

        <a
          href="https://github.com/jkenix/jkenix.github.io/tree/toystream"
          title="Github repo">
          Website on Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
