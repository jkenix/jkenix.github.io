import React, { lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/lib/slick.css";
import "../../styles/lib/slick-theme.css";
import Slider from "react-slick";

import webmade from "../../img/webmade.webp";
import checkbox from "../../img/checkbox.svg";

import Service_Preview from "../../components/services/Service_Preview.jsx";
import { TabList_main, Slider_settings } from "../../js/data.jsx";
import Order_Card from "../../components/services/Order_Card.jsx";
import Unique_Order_Card from "../../components/services/Unique_Order_Card.jsx";

import ScrollToTop from "../../components/main/ScrollToTop.jsx";
const Benefits = lazy(() => import("../../components/services/Benefits.jsx"));
const Discuss = lazy(() => import("../../components/main/Discuss.jsx"));

export default function Web_design() {
  const card_link = "https://forms.gle/neVqs5xMX5GU2nbT6";
  function Check() {
    return <img src={checkbox} width="15" height="15" alt="checkbox" />;
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Веб-дизайн</title>
          <meta property="og:title" content="Feni Design - Веб-дизайн" />
          {/* <meta property="og:url" content="https://jkenix.github.io/sercices" /> */}
          {/* <meta name="og:description" content="Услуги и цены Feni Design, " /> */}
          <meta
            name="description"
            content="Закажи собственный веб-дизайн от Feni Design!"
          />
        </Helmet>
        <main className="l-main l-web-design">
          <Service_Preview
            title="Разработка Веб Дизайна"
            desc="Если вашего бизнеса нет в Интернете, то ваш бизнес не будет
          работать - Билл Гейтс"
            brif_link={card_link}
            img_content={
              <>
                <img
                  src={webmade}
                  width="533"
                  height="453"
                  alt="Web-design preview image"
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
              Как выглядит Процесс разработки веб-дизайна:
            </h2>
            <div className="l-process-dev-slider">
              <Slider {...Slider_settings}>
                <div className="process-dev-content">
                  <span className="pd-num">01</span>
                  <p className="pd-desc section-desc">
                    Проработка задач клиента
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">02</span>
                  <p className="pd-desc section-desc">Исследование области</p>
                </div>
                <div className="process-dev-content">
                  <span className="pd-num">03</span>
                  <p className="pd-desc section-desc">
                    Создание Архитектуры сайта и каркаса
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">04</span>
                  <p className="pd-desc section-desc">
                    Поиск и группировка контента
                  </p>
                </div>
                <div className="process-dev-content">
                  <span className="pd-num">05</span>
                  <p className="pd-desc section-desc">Разработка веб-сайта</p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">06</span>
                  <p className="pd-desc section-desc">Тестирование и запуск</p>
                </div>
              </Slider>
            </div>
          </motion.section>
          <section className="l-service-works l-feni-section l-fm">
            <h2 className="service-works-title section-title">Примеры работ</h2>
            {TabList_main.map((tab, i) => {
              if (tab.name === "tab2") {
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
                      to={"/portfolio/websites/"}
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
                title="Корпоративный веб-сайт"
                price="От 75000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">До 20 дней</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Версия для планшетов
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Мобильная версия
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">До 20 дней</span>
                    </li>
                  </>
                }
              />
              <Order_Card
                card_link={card_link}
                title="Лендинг"
                price="От 35000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">До 7 дней</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Версия для планшетов
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Мобильная версия
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">До 20 дней</span>
                    </li>
                  </>
                }
              />
              <Order_Card
                card_link={card_link}
                title="Интернет-магазин"
                price="От 90000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">До 25 дней</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Версия для планшетов
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Мобильная версия
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">До 20 дней</span>
                    </li>
                  </>
                }
              />
              <Order_Card
                card_link={card_link}
                title="SaaS"
                price="От 150000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">До 20 дней</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Версия для планшетов
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Мобильная версия
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">До 20 дней</span>
                    </li>
                  </>
                }
              />
              <Unique_Order_Card card_link={card_link} />
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
