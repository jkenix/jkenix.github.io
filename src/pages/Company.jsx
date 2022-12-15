import {React, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import logo from "../img/Company-logo.svg";
import Footer from "../components/Footer.jsx";

export default function Company() {
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
          <title>Toy.Stream - Game studio</title>
          <meta property="og:title" content="Company Toy.Stream" />
          <meta
            property="og:url"
            content="https://jkenix.netlify.app/company"
          />
          <meta name="og:description" content="About company Toy.Stream." />
          <meta name="description" content="Toy.Steam - About company." />
        </Helmet>
        <header className={`l-header ${isActive ? "" : "ylgg-bg"}`}>
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
            <Link to="/" title="Главная">
              Главная
            </Link>
            <Link className="link-active" to="/company" title="Компания">
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
        <main className="l-main">
          <div className="l-company-about">
            <p style={{ fontSize: "5.5rem" }}>О компании</p>
          </div>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}
