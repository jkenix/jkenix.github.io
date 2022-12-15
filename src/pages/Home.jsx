import { React, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import logo from "../img/Company-logo.svg";
import Footer from "../components/Footer.jsx";

import pinterest from "../img/pinterest.svg";
import Behance from "../img/Behance.svg";
import Dribbble from "../img/Dribbble.svg";
import Snapchat from "../img/Snapchat.svg";
import Linkedin from "../img/Linkedin.svg";
import Facebook from "../img/Facebook.svg";
import unicorn from "../img/unicorn.svg";

export default function Home() {
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
      <HelmetProvider>
        <Helmet>
          <title>Toy.Stream</title>
          <meta property="og:title" content="Toy.Stream - Game studio" />
          <meta property="og:url" content="https://jkenix.netlify.app/" />
          <meta
            name="og:description"
            content="Toy.Steam - Page made by jkenix from layout."
          />
          <meta
            name="description"
            content="Page made by jkenix from layout Toy.Steam."
          />
        </Helmet>
        <header className={`l-header ${isActive ? "" : "ylg-bg"}`}>
          <div
            className={`hamburger ${isActive ? "ham-active" : ""}`}
            onClick={() => {
              handleClick();
            }}
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
            <Link className="link-active" to="/" title="Главная">
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
          <div className="lang-sw">
            <Link to="/" title="Switch language">
              ENG
            </Link>
          </div>
        </header>
        <div className="l-main ylg-bg">
          <div className="l-ga-wr">
            <div className="l-games-about">
              <div className="title">
                <h2>Мы создаем мобильные игры, в которые ты играешь</h2>
              </div>
              <div className="desc">
                <div className="social-links-vert">
                  <Link to="/">
                    <img
                      src={pinterest}
                      width={"32"}
                      height={"32"}
                      alt="pinterest"
                      title="pinterest"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src={Behance}
                      width={"32"}
                      height={"32"}
                      alt="Behance"
                      title="Behance"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src={Dribbble}
                      width={"32"}
                      height={"32"}
                      alt="Dribbble"
                      title="Dribbble"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src={Snapchat}
                      width={"32"}
                      height={"32"}
                      alt="Snapchat"
                      title="Snapchat"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src={Linkedin}
                      width={"32"}
                      height={"32"}
                      alt="Linkedin"
                      title="Linkedin"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src={Facebook}
                      width={"32"}
                      height={"32"}
                      alt="Facebook"
                      title="Facebook"
                    ></img>
                  </Link>
                </div>
                <div className="desc-content">
                  <Link className="check-box">Узнать подробнее</Link>
                  <div className="text-box">
                    <p>
                      «Оригинальные идеи, качество реализации игровых механик и
                      внимание к деталям интерфейса - наши основные принципы.»
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pic-block img__resp-block">
              <img
                src={unicorn}
                className="img__resp"
                width="768"
                height="733"
                alt="Unicorn picture"
              ></img>
            </div>
          </div>
        </div>
        <Footer />
      </HelmetProvider>
    </>
  );
}
