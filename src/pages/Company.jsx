import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ShowMenu, ShowMenuylgcom, NavActive } from "../js/scripts";
import "../styles/lib/slick.css";
import "../styles/lib/slick-theme.css";

import Header from "../components/Header.jsx";
import Sociallinksvert from "../components/Sociallinksvert.jsx";
import ResizableSliderAt from "../components/ResizableSliderAt.jsx";
import UpBtn from "../components/UpBtn.jsx";
import Footer from "../components/Footer.jsx";

import mountain from "../img/mountain.png";
import champ from "../img/champ.png";
import flag from "../img/flag.png";
import star from "../img/staricon.png";

export default function Company() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Toy.Stream - Game studio</title>
          <meta property="og:title" content="Company Toy.Stream" />
          <meta property="og:url" content={`${location.href}`} />
          <meta name="og:description" content="About company Toy.Stream." />
          <meta name="description" content="Toy.Steam - About company." />
        </Helmet>
        <header className="l-header ylg-bg-com">
          <div
            className="hamburger"
            onClick={() => {
              ShowMenu();
              ShowMenuylgcom();
              NavActive();
            }}>
            <span className="hamburger-item"></span>
          </div>
          <Header comlink="link-active la-c" />
        </header>
        <main className="l-main">
          <Sociallinksvert slvname="social-links-vert slv-static" />
          <div className="l-ca-wr ylg-bg-com">
            <div className="l-company-about">
              <div className="com-title">
                <h2>О компании</h2>
                <div className="com-text-desc">
                  <p>
                    Toy.Stream - это компания-разработчик и издатель мобильных
                    игр.
                  </p>
                  <p>
                    Мы работаем небольшими командами - это позволяет оставаться
                    гибкими и быстро подстраиваться под потребности наших
                    игроков. На каждом этапе - начиная с детального разбора
                    идеи, заканчивая реализацией игровых механик и геймплея - мы
                    ориентируемся на наших пользователей. Просто потому, что
                    сами играем*
                  </p>
                  <p>
                    Также мы помогаем другим студиям разработки реализовывать
                    свои идеи: поможем
                  </p>
                  <p>
                    {" "}
                    протестировать идеи и прототипы, а хит - издадим на
                    полностью прозрачных и вкусных условиях*
                  </p>
                </div>
              </div>
            </div>
            <div className="l-company-stats">
              <div className="l-scolumn l-sc-1">
                <div className="l-sblock">
                  <img
                    src={flag}
                    width={160}
                    height={162}
                    alt="Flag icon"
                    aria-hidden="true"></img>
                  <div className="text-block">
                    <span className="num-title">2млрд+</span>
                    <span className="num-desc">Установок</span>
                  </div>
                </div>
                <div className="l-sblock">
                  <img
                    src={champ}
                    width={160}
                    height={162}
                    alt="champ icon"
                    aria-hidden="true"></img>
                  <div className="text-block">
                    <span className="num-title">250млн+</span>
                    <span className="num-desc">Активных юзеров в месяц</span>
                  </div>
                </div>
              </div>
              <div className="l-scolumn l-sc-2">
                <div className="l-sblock">
                  <img
                    src={mountain}
                    width={160}
                    height={162}
                    alt="mountain icon"
                    aria-hidden="true"></img>
                  <div className="text-block">
                    <span className="num-title">500млн+</span>
                    <span className="num-desc">Игроков</span>
                  </div>
                </div>
                <div className="l-sblock">
                  <img
                    src={star}
                    width={160}
                    height={162}
                    alt="Star icon"
                    aria-hidden="true"></img>
                  <div className="text-block">
                    <span className="num-title">500+</span>
                    <span className="num-desc">Сотрудников</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-at-wr ylg-bg-at">
            <div className="l-about-team">
              <div className="l-at-title">
                <h2>Наша команда</h2>
              </div>
              <div className="l-at-content">
                <ResizableSliderAt />
              </div>
            </div>
          </div>
          <UpBtn btnname="up-btn ub-abs" />
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}