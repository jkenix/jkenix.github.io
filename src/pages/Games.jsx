import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ShowMenu,
  ShowMenubclgGames,
  NavActive
} from "../js/scripts";

import Header from "../components/Header.jsx";
import Sociallinksvert from "../components/Sociallinksvert.jsx";

import Footer from "../components/Footer.jsx";

import gp from "../img/games-preview.svg";

export default function Games() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Games</title>
          <meta property="og:title" content="Games Toy.Stream" />
          <meta property="og:url" content="https://jkenix.netlify.app/games" />
          <meta name="og:description" content="Games by Toy.Stream." />
          <meta name="description" content="Toy.Stream Games." />
        </Helmet>
        <header className="l-header bclg-bg-games">
          <div
            className="hamburger"
            onClick={() => {
              ShowMenu();
              ShowMenubclgGames();
              NavActive();
            }}
          >
            <span className="hamburger-item"></span>
          </div>
          <Header glink="link-active" />
        </header>
        <main className="l-main">
          <Sociallinksvert slvname="social-links-vert slv-static" />
          <div className="l-gi-wr bclg-bg-games">
            <div className="l-games-info">
              <div className="title">
                <h2>игры</h2>
                <div className="text-desc">
                  <p>
                    Toy.Stream сегодня — это команда из более 500 человек и
                    офисы по всему миру. Мы входим в топ-10 игровых
                    разработчиков по установкам — общее количество загрузок
                    перевалило за 2 млрд, а ежемесячная аудитория составляет
                    более 250 млн игроков.
                  </p>
                  <p>
                    В разработке у нас всегда находится более десяти проектов
                    одновременно. Мы постоянно экспериментируем, ищем новые
                    тренды и пробуем себя в новых жанрах.
                  </p>
                </div>
                <a
                  className="btn check-works"
                  href="#work"
                  title="Check our works"
                >
                  Смотреть наши работы
                </a>
              </div>
              <div className="pic-block img__resp-block" aria-hidden="true">
                <img
                  src={gp}
                  className="img__resp"
                  width="419"
                  height="662"
                  alt="Games preview picture"
                ></img>
              </div>
            </div>
          </div>
          <div className="dm-wr" id="work">
            <div className="l-design-masters gi-block">
              <div className="l-game-info">
                <h2></h2>
                <div className="gi-content">
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}
