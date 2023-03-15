import React, { lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/lib/slick.css";
import "../../styles/lib/slick-theme.css";
import Slider from "react-slick";

import presmade from "../../img/presmade.webp";
import checkbox from "../../img/checkbox.svg";

import Service_Preview from "../../components/services/Service_Preview.jsx";
import { TabList_main, Slider_settings } from "../../js/data.jsx";
import Order_Card from "../../components/services/Order_Card.jsx";
import Unique_Order_Card from "../../components/services/Unique_Order_Card.jsx";

import ScrollToTop from "../../components/main/ScrollToTop.jsx";
const Benefits = lazy(() => import("../../components/services/Benefits.jsx"));
const Discuss = lazy(() => import("../../components/main/Discuss.jsx"));

export default function Presentations() {
  const card_link = "https://forms.gle/Kf5J7RAoe2ZuEigc7";
  function Check() {
    return <img src={checkbox} width="15" height="15" alt="checkbox" />;
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Презентации</title>
          <meta property="og:title" content="Feni Design - Презентации" />
          {/* <meta property="og:url" content="https://jkenix.github.io/about" /> */}
          {/* <meta name="og:description" content="" /> */}
          <meta
            name="description"
            content="Закажи собственные презентации от Feni Design!"
          />
        </Helmet>
        <main className="l-main l-presentations">
          <Service_Preview
            title="Разработка Дизайна Презентаций"
            desc="Мы сделаем уникальный дизайн для вашей презентации!"
            brif_link={card_link}
            img_content={
              <>
                <img
                  src={presmade}
                  width="456"
                  height="456"
                  alt="Presentations preview image"
                  loading="eager"
                />
              </>
            }
          />
          <motion.section
            className="l-process-dev l-feni-section l-fm"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <h2 className="pd-title section-title">
              Как выглядит Процесс разработки презентаций:
            </h2>
            <div className="l-process-dev-slider">
              <Slider {...Slider_settings}>
                <div className="process-dev-content">
                  <span className="pd-num">01</span>
                  <p className="pd-desc section-desc">
                    Вы предоставляете нам наброски проекта
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">02</span>
                  <p className="pd-desc section-desc">
                    Заполненяем бриф и проводим Исследования
                  </p>
                </div>
                <div className="process-dev-content">
                  <span className="pd-num">03</span>
                  <p className="pd-desc section-desc">
                    Разработка концепции и стиля презентации
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">04</span>
                  <p className="pd-desc section-desc">
                    Внесение правок и полировка всех слайдов
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">05</span>
                  <p className="pd-desc section-desc">
                    Доработка и передача клиенту всех согласованных файлов!
                  </p>
                </div>
              </Slider>
            </div>
          </motion.section>
          <section className="l-service-works l-feni-section l-fm">
            <h2 className="service-works-title section-title">Примеры работ</h2>
            {TabList_main.map((tab, i) => {
              if (tab.name === "tab5") {
                return (
                  <motion.div
                    className="l-fp-section-content works-content"
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}>
                    {tab.content}
                    <Link
                      className="btn-link btn-b55 btn-focus"
                      to={"/portfolio/presentations/"}
                      title="Все работы">
                      Все работы
                    </Link>
                  </motion.div>
                );
              } else {
                return null;
              }
            })}
          </section>
          <section className="l-prices l-feni-section l-fm" id="prices">
            <motion.h2
              className="prices-title section-title"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}>
              Цены
            </motion.h2>
            <div className="l-project-prices">
              <Order_Card
                card_link={card_link}
                title="Лайт"
                price="От 6000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        2d инфографика
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Простые элементы
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Низкая детализация
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Небольшой объем контента
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Статичная графика
                      </span>
                    </li>
                  </>
                }
              />
              <Order_Card
                card_link={card_link}
                title="Стандарт"
                price="От 10000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Изометрия или сложная 2d графика
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Сложные элементы
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Высокая детализация
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Средний объем контента
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Небольшие анимации *gif
                      </span>
                    </li>
                  </>
                }
              />
              <Order_Card
                card_link={card_link}
                title="Профессиональный"
                price="От 12000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        3d графика или сложное 2d/изометрия
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Сложные элементы
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Высокая детализация
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Большой объем информации/контента
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        3d анимация/видео
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Контроль арт-директора
                      </span>
                    </li>
                  </>
                }
              />
            </div>
          </section>
          <Benefits />
          <Discuss />
        </main>
        <ScrollToTop />
      </HelmetProvider>
    </>
  );
}
