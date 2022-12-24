import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Slider from "react-slick";
import {
  ShowMenu,
  ShowMenuylgcom,
  NavActive,
  NavActiveAc,
} from "../js/scripts";

import Header from "../components/Header.jsx";
import Sociallinksvert from "../components/Sociallinksvert.jsx";
import Footer from "../components/Footer.jsx";

import mountain from "../img/mountain.png";
import champ from "../img/champ.png";
import flag from "../img/flag.png";
import star from "../img/staricon.png";
import ASherman from "../img/ASherman.svg";
import AIsaev from "../img/AIsaev.svg";
import ANegreev from "../img/ANegreev.svg";
import EImashev from "../img/EImashev.svg";

export default function Company() {
  class ResizableSlider extends Component {
    render() {
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        swipeToSlide: true,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              swipeToSlide: true,
              infinite: true,
            },
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
        ],
      };
      return (
        <Slider {...settings}>
          <div className="teammate-info-block">
            <div className="pic-block img__resp-block">
              <img
                src={ASherman}
                className="img__resp"
                width="219"
                height="219"
                alt="Alex Sherman"
              ></img>
            </div>
            <div className="about-teammate">
              <div className="t-name t-m">
                <span>Алекс Шерман</span>
              </div>
              <div className="t-desc t-spec t-m">
                <span>CEO</span>
              </div>
              <div className="t-desc t-q t-m">
                <span>Цитата:</span>
              </div>
              <q>
                Безос говорил, если не можешь накормить команду двумя пиццами -
                у тебя слишком большая команда. Нам удается! И в этом наше
                преимущество. (-:
              </q>
            </div>
          </div>
          <div className="teammate-info-block">
            <div className="pic-block img__resp-block">
              <img
                src={AIsaev}
                className="img__resp"
                width="219"
                height="219"
                alt="Alex Sherman"
              ></img>
            </div>
            <div className="about-teammate">
              <div className="t-name t-m">
                <span>Александр Исаев</span>
              </div>
              <div className="t-desc t-spec t-m">
                <span>(CBDO)</span>
              </div>
              <div className="t-desc t-q t-m">
                <span>Цитата:</span>
              </div>
              <q>
                Мы ежедневно отслеживаем и нализируем топы Apple Store и Goole
                Play Market - в нашем деле важно быть в курсе каждой детали
                ситуации на рынке
              </q>
            </div>
          </div>
          <div className="teammate-info-block">
            <div className="pic-block img__resp-block">
              <img
                src={ANegreev}
                className="img__resp"
                width="219"
                height="219"
                alt="Alex Sherman"
              ></img>
            </div>
            <div className="about-teammate">
              <div className="t-name t-m">
                <span>Александр Негреев</span>
              </div>
              <div className="t-desc t-spec t-m">
                <span>Game designer</span>
              </div>
              <div className="t-desc t-q t-m">
                <span>Цитата:</span>
              </div>
              <q>
                Мозговые штурмы порой затягиваются до поздней ночи, но как еще
                найти среди сотни идей - ту самую, блестящую?
              </q>
            </div>
          </div>
          <div className="teammate-info-block">
            <div className="pic-block img__resp-block">
              <img
                src={EImashev}
                className="img__resp"
                width="219"
                height="219"
                alt="Alex Sherman"
              ></img>
            </div>
            <div className="about-teammate">
              <div className="t-name t-m">
                <span>Эрик Имашев</span>
              </div>
              <div className="t-desc t-spec t-m">
                <span>Unity developer</span>
              </div>
              <div className="t-desc t-q t-m">
                <span>Цитата:</span>
              </div>
              <q>
                В каждом проекте важно не только то, что видно игроку - но и что
                находится под капотом. Мгновенный отклик и вовремя сохраненная
                игра - очень ценятся игроками
              </q>
            </div>
          </div>
        </Slider>
      );
    }
  }
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
        <header className="l-header ylg-bg-com">
          <div
            className="hamburger"
            onClick={() => {
              ShowMenu();
              ShowMenuylgcom();
              NavActive();
              NavActiveAc();
            }}
          >
            <span className="hamburger-item"></span>
          </div>
          <Header comlink="link-active" />
        </header>
        <main className="l-main">
          <Sociallinksvert slvname="social-links-vert social-links-vert-at slv-hidden" />
          <div className="l-ca-wr ylg-bg-com">
            <div className="l-company-about">
              <div className="title">
                <h2>О компании</h2>
                <div className="text-desc">
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
                    alt="Star icon"
                    aria-hidden="true"
                  ></img>
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
                    alt="Star icon"
                    aria-hidden="true"
                  ></img>
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
                    alt="Star icon"
                    aria-hidden="true"
                  ></img>
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
                    aria-hidden="true"
                  ></img>
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
                <ResizableSlider />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}
