import React, { lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/lib/slick.css";
import "../../styles/lib/slick-theme.css";
import Slider from "react-slick";

import illmade from "../../img/illmade.webp";
import checkbox from "../../img/checkbox.svg";

import Service_Preview from "../../components/services/Service_Preview.jsx";
import { TabList_main, Slider_settings } from "../../js/data.jsx";
import Order_Card from "../../components/services/Order_Card.jsx";

import ScrollToTop from "../../components/main/ScrollToTop.jsx";
const Benefits = lazy(() => import("../../components/services/Benefits.jsx"));
const Discuss = lazy(() => import("../../components/main/Discuss.jsx"));

export default function Illustrations() {
  const card_link = "https://forms.gle/G1F61kMXz7n8ZJhh7";
  function Check() {
    return <img src={checkbox} width="15" height="15" alt="checkbox" />;
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Иллюстрации</title>
          <meta property="og:title" content="Feni Design - Иллюстрации" />
          {/* <meta property="og:url" content="https://jkenix.github.io/about" /> */}
          {/* <meta name="og:description" content="" /> */}
          <meta
            name="description"
            content="Закажи собственные иллюстрации от Feni Design!"
          />
        </Helmet>
        <main className="l-main lillustrations">
          <Service_Preview
            title="Разработка Иллюстраций"
            desc="Сделайте свой сайт, рекламу или приложение более запоминающимся и узнаваемым с помощью наших уникальных иллюстраций!"
            brif_link={card_link}
            img_content={
              <>
                <img
                  src={illmade}
                  width="425"
                  height="425"
                  alt="Illustrations preview image"
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
              Как выглядит Процесс разработки лого:
            </h2>
            <div className="l-process-dev-slider">
              <Slider {...Slider_settings}>
                <div className="process-dev-content">
                  <span className="pd-num">01</span>
                  <p className="pd-desc section-desc">
                    Изучаем ваш бренд и существующие гайдлайны
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">02</span>
                  <p className="pd-desc section-desc">
                    Заполнение брифа и Исследования
                  </p>
                </div>
                <div className="process-dev-content">
                  <span className="pd-num">03</span>
                  <p className="pd-desc section-desc">
                    Визуализация концептов и прототипов (создание первых версий)
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">04</span>
                  <p className="pd-desc section-desc">
                    Обсудим первые иллюстрации и внесем правки!
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">05</span>
                  <p className="pd-desc section-desc">
                    Создание всех остальных иллюстраций в утвержденном стиле
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">06</span>
                  <p className="pd-desc section-desc">
                    Передаем Вам все необходимые готовые файлы!
                  </p>
                </div>
              </Slider>
            </div>
          </motion.section>
          <section className="l-service-works l-feni-section l-fm">
            <h2 className="service-works-title section-title">Примеры работ</h2>
            {TabList_main.map((tab, i) => {
              if (tab.name === "tab4") {
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
                      to={"/portfolio/all_works/"}
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
                title="Плоская/простая иллюстрация"
                price="От 4000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Плоская иллюстрация
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">2 концепта</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">3 правки</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Исходные файлы
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        PNG, SVG, JPEG
                      </span>
                    </li>
                  </>
                }
              />
              <Order_Card
                card_link={card_link}
                title="Изометрическая/сложная иллюстрация"
                price="От 6000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">2 концепта</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">3 правки</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Работа над деталями
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Исходные файлы
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        PNG, SVG, JPEG
                      </span>
                    </li>
                  </>
                }
              />
              <Order_Card
                card_link={card_link}
                title="3D Иллюстрация"
                price="От 12000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        3д иллюстрация / Высокая детализация
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">2 концепта</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        1 Визуализация
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">3 правки</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Контроль арт-директора
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Рендереры с высоким разрешением
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
