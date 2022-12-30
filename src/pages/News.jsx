import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import { ShowMenu, NavActive } from "../js/scripts";
import Header from "../components/Header.jsx";
import Sociallinksvert from "../components/Sociallinksvert.jsx";
import UpBtn from "../components/UpBtn.jsx";
import Footer from "../components/Footer.jsx";

import gamenews from "../img/gamenews.png";
import calendar from "../img/calendar.svg";
import newsarrow from "../img/news-arrow.svg";

export default function News() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>News</title>
          <meta property="og:title" content="News Toy.Stream" />
          <meta property="og:url" content="https://jkenix.netlify.app/news" />
          <meta
            name="og:description"
            content="Check news from Toy.Stream team."
          />
          <meta name="description" content="Toy.Stream News." />
        </Helmet>
        <header className="l-header">
          <div
            className="hamburger"
            onClick={() => {
              ShowMenu();
              NavActive();
            }}
          >
            <span className="hamburger-item"></span>
          </div>
          <Header nlink="link-active la-c" />
        </header>
        <main className="l-main">
        <Sociallinksvert slvname="social-links-vert slv-abs" />
          <div className="l-news-wr">
            <h2>Новости</h2>
            <div className="l-news">
              <Link className="news-block" to="/news">
                <div className="news-pic img__resp-block" aria-hidden="true">
                  <img
                    src={gamenews}
                    className="img__resp"
                    width="505"
                    height="350"
                    alt="Game news picture"
                  ></img>
                </div>
                <div className="news-content">
                  <span className="news-date">
                    <img
                      src={calendar}
                      className="img__resp"
                      width="24"
                      height="24"
                      alt="Calendar"
                      aria-hidden="true"
                    ></img>
                    1 апреля 2021 г
                  </span>
                  <div className="news-title">
                    <span>Советы: как оптимизировать 3D-игры</span>
                  </div>
                  <p>
                    Toy Stream сегодня — это команда из более 300 человек и
                    офисы по всему миру. Мы входим в топ-10 игровых
                    разработчиков по установкам — общее количество загрузок
                    перевалило за 1 млрд, а ежемесячная аудитория составляет
                    более 250 млн игроков.
                  </p>
                  <div className="arrow-img img__resp-block" aria-hidden="true">
                    <img
                      src={newsarrow}
                      className="img__resp"
                      width="71"
                      height="21"
                      alt="Arrow news"
                    ></img>
                  </div>
                </div>
              </Link>
              <Link className="news-block" to="/news">
                <div className="news-pic img__resp-block" aria-hidden="true">
                  <img
                    src={gamenews}
                    className="img__resp"
                    width="505"
                    height="350"
                    alt="Game news picture"
                  ></img>
                </div>
                <div className="news-content">
                  <span className="news-date">
                    <img
                      src={calendar}
                      className="img__resp"
                      width="24"
                      height="24"
                      alt="Calendar"
                      aria-hidden="true"
                    ></img>
                    1 апреля 2021 г
                  </span>
                  <div className="news-title">
                    <span>Советы: как оптимизировать 3D-игры</span>
                  </div>
                  <p>
                    Toy Stream сегодня — это команда из более 300 человек и
                    офисы по всему миру. Мы входим в топ-10 игровых
                    разработчиков по установкам — общее количество загрузок
                    перевалило за 1 млрд, а ежемесячная аудитория составляет
                    более 250 млн игроков.
                  </p>
                  <div className="arrow-img img__resp-block" aria-hidden="true">
                    <img
                      src={newsarrow}
                      className="img__resp"
                      width="71"
                      height="21"
                      alt="Arrow news"
                    ></img>
                  </div>
                </div>
              </Link>
              <Link className="news-block" to="/news">
                <div className="news-pic img__resp-block" aria-hidden="true">
                  <img
                    src={gamenews}
                    className="img__resp"
                    width="505"
                    height="350"
                    alt="Game news picture"
                  ></img>
                </div>
                <div className="news-content">
                  <span className="news-date">
                    <img
                      src={calendar}
                      className="img__resp"
                      width="24"
                      height="24"
                      alt="Calendar"
                      aria-hidden="true"
                    ></img>
                    1 апреля 2021 г
                  </span>
                  <div className="news-title">
                    <span>Советы: как оптимизировать 3D-игры</span>
                  </div>
                  <p>
                    Toy Stream сегодня — это команда из более 300 человек и
                    офисы по всему миру. Мы входим в топ-10 игровых
                    разработчиков по установкам — общее количество загрузок
                    перевалило за 1 млрд, а ежемесячная аудитория составляет
                    более 250 млн игроков.
                  </p>
                  <div className="arrow-img img__resp-block" aria-hidden="true">
                    <img
                      src={newsarrow}
                      className="img__resp"
                      width="71"
                      height="21"
                      alt="Arrow news"
                    ></img>
                  </div>
                </div>
              </Link>
              <Link className="news-block" to="/news">
                <div className="news-pic img__resp-block" aria-hidden="true">
                  <img
                    src={gamenews}
                    className="img__resp"
                    width="505"
                    height="350"
                    alt="Game news picture"
                  ></img>
                </div>
                <div className="news-content">
                  <span className="news-date">
                    <img
                      src={calendar}
                      className="img__resp"
                      width="24"
                      height="24"
                      alt="Calendar"
                      aria-hidden="true"
                    ></img>
                    1 апреля 2021 г
                  </span>
                  <div className="news-title">
                    <span>Советы: как оптимизировать 3D-игры</span>
                  </div>
                  <p>
                    Toy Stream сегодня — это команда из более 300 человек и
                    офисы по всему миру. Мы входим в топ-10 игровых
                    разработчиков по установкам — общее количество загрузок
                    перевалило за 1 млрд, а ежемесячная аудитория составляет
                    более 250 млн игроков.
                  </p>
                  <div className="arrow-img img__resp-block" aria-hidden="true">
                    <img
                      src={newsarrow}
                      className="img__resp"
                      width="71"
                      height="21"
                      alt="Arrow news"
                    ></img>
                  </div>
                </div>
              </Link>
              <Link className="news-block" to="/news">
                <div className="news-pic img__resp-block" aria-hidden="true">
                  <img
                    src={gamenews}
                    className="img__resp"
                    width="505"
                    height="350"
                    alt="Game news picture"
                  ></img>
                </div>
                <div className="news-content">
                  <span className="news-date">
                    <img
                      src={calendar}
                      className="img__resp"
                      width="24"
                      height="24"
                      alt="Calendar"
                      aria-hidden="true"
                    ></img>
                    1 апреля 2021 г
                  </span>
                  <div className="news-title">
                    <span>Советы: как оптимизировать 3D-игры</span>
                  </div>
                  <p>
                    Toy Stream сегодня — это команда из более 300 человек и
                    офисы по всему миру. Мы входим в топ-10 игровых
                    разработчиков по установкам — общее количество загрузок
                    перевалило за 1 млрд, а ежемесячная аудитория составляет
                    более 250 млн игроков.
                  </p>
                  <div className="arrow-img img__resp-block" aria-hidden="true">
                    <img
                      src={newsarrow}
                      className="img__resp"
                      width="71"
                      height="21"
                      alt="Arrow news"
                    ></img>
                  </div>
                </div>
              </Link>
              <Link className="news-block" to="/news">
                <div className="news-pic img__resp-block" aria-hidden="true">
                  <img
                    src={gamenews}
                    className="img__resp"
                    width="505"
                    height="350"
                    alt="Game news picture"
                  ></img>
                </div>
                <div className="news-content">
                  <span className="news-date">
                    <img
                      src={calendar}
                      className="img__resp"
                      width="24"
                      height="24"
                      alt="Calendar"
                      aria-hidden="true"
                    ></img>
                    1 апреля 2021 г
                  </span>
                  <div className="news-title">
                    <span>Советы: как оптимизировать 3D-игры</span>
                  </div>
                  <p>
                    Toy Stream сегодня — это команда из более 300 человек и
                    офисы по всему миру. Мы входим в топ-10 игровых
                    разработчиков по установкам — общее количество загрузок
                    перевалило за 1 млрд, а ежемесячная аудитория составляет
                    более 250 млн игроков.
                  </p>
                  <div className="arrow-img img__resp-block" aria-hidden="true">
                    <img
                      src={newsarrow}
                      className="img__resp"
                      width="71"
                      height="21"
                      alt="Arrow news"
                    ></img>
                  </div>
                </div>
              </Link>
            </div>
          <UpBtn btnname="up-btn"/>
          </div>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}
