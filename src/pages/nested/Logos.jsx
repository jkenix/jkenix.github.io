import React, { useState, lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/lib/slick.css";
import "../../styles/lib/slick-theme.css";
import Slider from "react-slick";

import logomake from "../../img/logomake.webp";
import checkbox from "../../img/checkbox.svg";

import Service_Preview from "../../components/services/Service_Preview.jsx";
import { TabList_main, Slider_settings } from "../../js/data.jsx";
import Order_Card from "../../components/services/Order_Card.jsx";

import ScrollToTop from "../../components/main/ScrollToTop.jsx";
const Benefits = lazy(() => import("../../components/services/Benefits.jsx"));
const Discuss = lazy(() => import("../../components/main/Discuss.jsx"));

export default function Logos() {
  const card_link = "https://forms.gle/Tvioeac6DhDZxu9N9";
  function Check() {
    return <img src={checkbox} width="15" height="15" alt="checkbox" />;
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Логотипы</title>
          <meta property="og:title" content="Feni Design - Логотипы" />
          {/* <meta property="og:url" content="https://jkenix.github.io/about" /> */}
          {/* <meta name="og:description" content="" /> */}
          <meta
            name="description"
            content="Закажи собственные логотипы от Feni Design!"
          />
        </Helmet>
        <main className="l-main l-logos">
          <Service_Preview
            title="Разработка Логотипа"
            desc="Вы хорошо знаете свой бизнес, а мы знаем как сделать хороший дизайн! И будем рады сделать лого для вашей: Компании, Приложения или Сайта."
            brif_link={card_link}
            img_content={
              <>
                <img
                  src={logomake}
                  width="472"
                  height="472"
                  alt="Logos preview image"
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
              Как выглядит Процесс разработки логотипа:
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
                    Мы анализируем вашу нишу и подбираем стиль
                  </p>
                </div>
                <div className="process-dev-content">
                  <span className="pd-num">03</span>
                  <p className="pd-desc section-desc">
                    Составляем подробное ТЗ для разработки проекта
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">04</span>
                  <p className="pd-desc section-desc">
                    Начинаем работу над дизайном!
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">05</span>
                  <p className="pd-desc section-desc">
                    Внесение правок и/или разработка дополнительных концепций
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">06</span>
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
              if (tab.name === "tab1") {
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
                      to={"/portfolio/logos/"}
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
                title="Обычный"
                price="От 15000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        3 концепции; 2 правки; 2 дополнительные концепции
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">3 дня</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Исходные файлы (*ai)
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Логотип в черном, белом и цветном варианте
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Логотип в цветовом пространстве CMYK
                      </span>
                    </li>
                  </>
                }
              />
              <Order_Card
                card_link={card_link}
                title="Стандартный"
                price="От 25000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        5 концепций; 3 правки; 3 дополнительные концепции
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">2 дня</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc-strong small-section">
                        Услуги пакета "Обычный"
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Презентация логотипа на мокапах (Вывески, Печатные
                        медиа, Продукция)
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Право на внесение правок после утверждения макета
                      </span>
                    </li>
                  </>
                }
              />
              <Order_Card
                card_link={card_link}
                title="Максимальный"
                price="От 35000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        8 концепций; 3 правки; 5 дополнительных концепций
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">3 дня</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc-strong small-section">
                        Услуги пакета "Стандарт"
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Подбор фирменных шрифтов
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Подбор цветовой палитры
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
