import React, { Component } from "react";
import Slider from "react-slick";

import hmasters from "../img/hitmasters.png";
import pmakeup from "../img/perfect-makeup-3d.png";
import emasters from "../img/escape-masters.png";

export default class ResizableSliderGames extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      swipeToSlide: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        <div className="hitmasters game-project">
          <div className="gi-pic-block img__resp-block" aria-hidden="true">
            <img
              src={hmasters}
              className="img__resp"
              width="408.42"
              height="408.42"
              alt="Hitmasters"
            ></img>
          </div>
          <h2>Hitmasters</h2>
          <div className="gp-desc">
            <p>Стань стрелком и срази всех врагов!</p>
            <p>
              Целься метко, используй объекты на уровнях и не дай никому
              спастись! Открывай новое оружие, пополняй свой арсенал и проходи
              головоломки.
            </p>
          </div>
          <button className="btn check-gp">Подробнее</button>
        </div>
        <div className="escape-masters game-project">
          <div className="gi-pic-block img__resp-block" aria-hidden="true">
            <img
              src={emasters}
              className="img__resp"
              width="408.42"
              height="408.42"
              alt="Escape Masters"
            ></img>
          </div>
          <h2>Escape Masters</h2>
          <div className="gp-desc">
            <p>Совершите идеальный побег!</p>
            <p>
              Спаси напарников, собери сокровища и прокопай путь к свободе, но
              опасайся ловушек.
            </p>
          </div>
          <button className="btn check-gp">Подробнее</button>
        </div>
        <div className="perfect-makeup-3D game-project">
          <div className="gi-pic-block img__resp-block" aria-hidden="true">
            <img
              src={pmakeup}
              className="img__resp"
              width="408.42"
              height="408.42"
              alt="Perfect Makeup 3D"
            ></img>
          </div>
          <h2>Perfect Makeup 3D</h2>
          <div className="gp-desc">
            <p>Добро пожаловать в мир макияжа!</p>
            <p>
              Выбирайте кисти, цвета и оттенки губной помады, подводки для глаз
              и пудры, чтобы добиться превосходного результата.
            </p>
          </div>
          <button className="btn check-gp">Подробнее</button>
        </div>
      </Slider>
    );
  }
}
