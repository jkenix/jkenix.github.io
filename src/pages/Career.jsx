import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ShowMenu, ShowMenubclg, NavActive } from "../js/scripts";
import { Link } from "react-router-dom";
import "../styles/lib/slick.css";
import "../styles/lib/slick-theme.css";

import Header from "../components/Header.jsx";
import Sociallinksvert from "../components/Sociallinksvert.jsx";
import UpBtn from "../components/UpBtn.jsx";
import Footer from "../components/Footer.jsx";

import lamp from "../img/lamp.svg";
import lampactive from "../img/lamp-active.svg";
import ponyman from "../img/pony-man.svg";
import coin from "../img/coin.svg";
import crown from "../img/crown.svg";
import prize from "../img/prize.svg";

export default function Career() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Career</title>
          <meta property="og:title" content="Career in Toy.Stream" />
          <meta
            property="og:url"
            content={`${"https://toystream.pages.dev" + "/career"}`}
          />
          <meta name="og:description" content="Post a job now!" />
          <meta name="description" content="Career in Toy.Stream." />
        </Helmet>
        <header className="l-header bclg-bg">
          <div
            className="hamburger"
            onClick={() => {
              ShowMenu();
              ShowMenubclg();
              NavActive();
            }}>
            <span className="hamburger-item"></span>
          </div>
          <Header carlink="link-active la-c" />
        </header>
        <main className="l-main">
          <Sociallinksvert slvname="social-links-vert slv-static" />
          <div className="l-car-a-wr bclg-bg" id="career">
            <div className="l-career-about">
              <div className="car-title">
                <h2>Карьера в Toy.Stream</h2>
                <p>
                  Мы распределенная команда из более 300 специалистов по всему
                  миру. И расстояния не мешают нам создавать хиты для миллионов
                  игроков.
                </p>
                <a
                  className="btn check-vacancy"
                  href="#vacancies"
                  title="Check vacancies">
                  Вакансия
                </a>
              </div>
              <picture className="car-pic-block img__resp-block">
                <source
                  media="(max-width: 1024.98px)"
                  srcSet={lampactive}
                  width="833"
                  height="793"
                />
                <img
                  src={lamp}
                  className="img__resp"
                  width="327"
                  height="560"
                  alt="Career preview picture"></img>
              </picture>
            </div>
          </div>
          <div className="l-ov-wr" id="vacancies">
            <h2>Наши вакансии</h2>
            <div className="l-our-vacancies">
              <Link className="vac-block ua-manager" to="#">
                <div className="vac-info">
                  <span className="vi-spec">User Acquisition Manager</span>
                  <span className="check-more">Подробнее</span>
                </div>
              </Link>
              <Link className="vac-block hr-manager" to="#">
                <div className="vac-info">
                  <span className="vi-spec">HR Manager (Marketing/Cross)</span>
                  <span className="check-more">Подробнее</span>
                </div>
              </Link>
              <Link className="vac-block techical-artist" to="#">
                <div className="vac-info">
                  <span className="vi-spec">Technical Artist 2D</span>
                  <span className="check-more">Подробнее</span>
                </div>
              </Link>
              <Link className="vac-block hr-manager" to="#">
                <div className="vac-info">
                  <span className="vi-spec">HR Manager (Marketing/Cross)</span>
                  <span className="check-more">Подробнее</span>
                </div>
              </Link>
              <Link className="vac-block techical-artist" to="#">
                <div className="vac-info">
                  <span className="vi-spec">Technical Artist 2D</span>
                  <span className="check-more">Подробнее</span>
                </div>
              </Link>
              <Link className="vac-block hr-manager" to="#">
                <div className="vac-info">
                  <span className="vi-spec">HR Manager (Marketing/Cross)</span>
                  <span className="check-more">Подробнее</span>
                </div>
              </Link>
              <Link className="vac-block techical-artist" to="#">
                <div className="vac-info">
                  <span className="vi-spec">Technical Artist 2D</span>
                  <span className="check-more">Подробнее</span>
                </div>
              </Link>
              <Link className="vac-block hr-manager" to="#">
                <div className="vac-info">
                  <span className="vi-spec">HR Manager (Marketing/Cross)</span>
                  <span className="check-more">Подробнее</span>
                </div>
              </Link>
              <Link className="vac-block techical-artist" to="#">
                <div className="vac-info">
                  <span className="vi-spec">Technical Artist 2D</span>
                  <span className="check-more">Подробнее</span>
                </div>
              </Link>
            </div>
            <UpBtn btnname="up-btn" />
          </div>
          <div className="l-bw-wr">
            <div className="l-benefits-work">
              <div className="bw-info">
                <h2>Преимущества работы в Toy.Stream</h2>
                <div className="bw-desc">
                  <p>
                    Toy.Stream сегодня — это команда из более 500 человек и
                    офисы по всему миру. Мы входим в топ-10 игровых
                    разработчиков по установкам — общее количество загрузок
                    перевалило за 2 млрд, а ежемесячная аудитория составляет
                    более 250 млн игроков.{" "}
                  </p>
                  <p>
                    В разработке у нас всегда находится более десяти проектов
                    одновременно. Мы постоянно экспериментируем, ищем новые
                    тренды и пробуем себя в новых жанрах.
                  </p>
                </div>
              </div>
              <div className="bw-content">
                <div className="bw-row br-1">
                  <div className="bw-row-content team">
                    <div
                      className="bwrc-pic img__resp-block"
                      aria-hidden="true">
                      <img
                        src={ponyman}
                        className="img__resp"
                        width="160"
                        height="162"
                        alt="Ponyman"></img>
                    </div>
                    <div className="bwrc-desc">
                      <span className="bwrc-desc-title">Команда</span>
                      <span className="bwrc-desc-info">Лучшие из лучших</span>
                    </div>
                  </div>
                  <div className="bw-row-content bonus">
                    <div
                      className="bwrc-pic img__resp-block"
                      aria-hidden="true">
                      <img
                        src={coin}
                        className="img__resp"
                        width="160"
                        height="162"
                        alt="Coin"></img>
                    </div>
                    <div className="bwrc-desc">
                      <span className="bwrc-desc-title">Бонусы</span>
                      <span className="bwrc-desc-info">% с проектов</span>
                    </div>
                  </div>
                </div>
                <div className="bw-row br-2">
                  <div className="bw-row-content self-realization">
                    <div
                      className="bwrc-pic img__resp-block"
                      aria-hidden="true">
                      <img
                        src={crown}
                        className="img__resp"
                        width="160"
                        height="162"
                        alt="Crown"></img>
                    </div>
                    <div className="bwrc-desc">
                      <span className="bwrc-desc-title">Самореализация</span>
                      <span className="bwrc-desc-info">Поддерживаем идеи</span>
                    </div>
                  </div>
                  <div className="bw-row-content development">
                    <div
                      className="bwrc-pic img__resp-block"
                      aria-hidden="true">
                      <img
                        src={prize}
                        className="img__resp"
                        width="160"
                        height="162"
                        alt="Prize"></img>
                    </div>
                    <div className="bwrc-desc">
                      <span className="bwrc-desc-title">Развитие</span>
                      <span className="bwrc-desc-info">
                        Растим профессионалов
                      </span>
                    </div>
                  </div>
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
