import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ShowMenu, ShowMenubclg, NavActive } from "../js/scripts";

import Header from "../components/Header.jsx";
import Sociallinksvert from "../components/Sociallinksvert.jsx";
import ResizableSliderGames from "../components/ResizableSliderGames.jsx";
import UpBtn from "../components/UpBtn.jsx";
import Footer from "../components/Footer.jsx";

import gp from "../img/games-preview.svg";
import dmasters from "../img/design-masters.png";
import pmakeup from "../img/perfect-makeup-3d.png";
import emasters from "../img/escape-masters.png";
import hmasters from "../img/hitmasters.png";

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
        <header className="l-header bclg-bg">
          <div
            className="hamburger"
            onClick={() => {
              ShowMenu();
              ShowMenubclg();
              NavActive();
            }}
          >
            <span className="hamburger-item"></span>
          </div>
          <Header glink="link-active la-c" />
        </header>
        <main className="l-main">
          <Sociallinksvert slvname="social-links-vert slv-static" />
          <div className="l-gi-wr bclg-bg">
            <div className="l-games-info">
              <div className="gam-title">
                <h2>игры</h2>
                <div className="gam-text-desc">
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
              <div className="gam-pic-block img__resp-block" aria-hidden="true">
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
          <div className="l-dm-wr ow-wr" id="work">
            <div className="l-design-masters gi-block">
              <div className="l-game-info">
                <h2>Design Masters</h2>
                <div className="dm-desc gi-desc">
                  <p>Станьте дизайнером интерьеров!</p>
                  <p>
                    Проходите уровни матч-3, создавайте собственные дизайны и
                    интерьеры, следите за историей и знакомьтесь с персонажами.
                  </p>
                </div>
                <button className="btn check-gi" title="Check Design Masters">
                  Подробнее
                </button>
              </div>
              <div className="ow-pic-block img__resp-block" aria-hidden="true">
                <img
                  src={dmasters}
                  className="img__resp"
                  width="695"
                  height="695"
                  alt="Design Masters"
                ></img>
              </div>
            </div>
          </div>
          <div className="l-pm-wr ow-wr" id="work">
            <div className="l-perfect-makeup gi-block">
              <div className="ow-pic-block img__resp-block" aria-hidden="true">
                <img
                  src={pmakeup}
                  className="img__resp"
                  width="695"
                  height="695"
                  alt="Perfect Makeup 3D"
                ></img>
              </div>
              <div className="l-game-info">
                <h2>Perfect Makeup 3D</h2>
                <div className="pm-desc gi-desc">
                  <p>Добро пожаловать в мир макияжа!</p>
                  <p>
                    Выбирайте кисти, цвета и оттенки губной помады, подводки для
                    глаз и пудры, чтобы добиться превосходного результата.
                  </p>
                </div>
                <button
                  className="btn check-gi"
                  title="Check Perfect Makeup 3D"
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
          <div className="l-em-wr ow-wr" id="work">
            <div className="l-escape-masters gi-block">
              <div className="l-game-info">
                <h2>Escape Masters</h2>
                <div className="em-desc gi-desc">
                  <p>Совершите идеальный побег!</p>
                  <p>
                    Спаси напарников, собери сокровища и прокопай путь к
                    свободе, но опасайся ловушек.
                  </p>
                </div>
                <button className="btn check-gi" title="Check Escape Masters">
                  Подробнее
                </button>
              </div>
              <div className="ow-pic-block img__resp-block" aria-hidden="true">
                <img
                  src={emasters}
                  className="img__resp"
                  width="695"
                  height="695"
                  alt="Escape Masters"
                ></img>
              </div>
            </div>
          </div>
          <div className="l-hm-wr ow-wr" id="work">
            <div className="l-hitmasters gi-block">
              <div className="ow-pic-block img__resp-block" aria-hidden="true">
                <img
                  src={hmasters}
                  className="img__resp"
                  width="695"
                  height="695"
                  alt="Hitmasters"
                ></img>
              </div>
              <div className="l-game-info">
                <h2>Hitmasters</h2>
                <div className="hm-desc gi-desc">
                  <p>Стань стрелком и срази всех врагов!</p>
                  <p>
                    Целься метко, используй объекты на уровнях и не дай никому
                    спастись! Открывай новое оружие, пополняй свой арсенал и
                    проходи головоломки.
                  </p>
                </div>
                <button className="btn check-gi" title="Check Hitmasters">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
          <a
            href="#lastprojects"
            title="Check last projects"
            className="btn more-projects"
          >
            Больше проектов
          </a>
          <div className="l-lp-wr">
            <div className="l-last-projects" id="lastprojects">
              <div className="l-lp-title">
                <h2>Последние проекты</h2>
              </div>
              <ResizableSliderGames />
            </div>
          </div>
          <UpBtn/>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}
