import { React, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import { ShowMenu, ShowMenuylg, NavActiveMain } from "../js/scripts";
import Header from "../components/Header.jsx";
import Sociallinksvert from "../components/Sociallinksvert.jsx";
import Footer from "../components/Footer.jsx";

import unicorn from "../img/unicorn.svg";

export default function Home() {
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
        <header className="l-header ylg-bg">
          <div
            className="hamburger"
            onClick={() => {
              ShowMenu();
              ShowMenuylg();
              NavActiveMain();
            }}
          >
            <span className="hamburger-item"></span>
          </div>
          <Header mlink="link-active" />
        </header>
        <div className="l-main ylg-bg">
          <div className="l-ga-wr">
            <div className="l-games-about">
              <div className="title">
                <h2>Мы создаем мобильные игры, в которые ты играешь</h2>
              </div>
              <div className="desc">
                <Sociallinksvert slvname="social-links-vert" />
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
