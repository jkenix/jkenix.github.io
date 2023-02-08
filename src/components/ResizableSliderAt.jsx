import React, { Component } from 'react'
import Slider from "react-slick";

import ASherman from "../img/ASherman.svg";
import AIsaev from "../img/AIsaev.svg";
import ANegreev from "../img/ANegreev.svg";
import EImashev from "../img/EImashev.svg";

export default class ResizableSliderAt extends Component {
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
            <div className="ti-pic-block img__resp-block" aria-hidden="true">
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
            <div className="ti-pic-block img__resp-block" aria-hidden="true">
              <img
                src={AIsaev}
                className="img__resp"
                width="219"
                height="219"
                alt="Alex Isaev"
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
            <div className="ti-pic-block img__resp-block" aria-hidden="true">
              <img
                src={ANegreev}
                className="img__resp"
                width="219"
                height="219"
                alt="Alex Negreev"
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
            <div className="ti-pic-block img__resp-block" aria-hidden="true">
              <img
                src={EImashev}
                className="img__resp"
                width="219"
                height="219"
                alt="Eric Imashev"
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