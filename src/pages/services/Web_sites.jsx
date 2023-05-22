import React, { useState, lazy } from "react"; // Подключение модулей React
import { Helmet, HelmetProvider } from "react-helmet-async"; // Импорт модулей Helmet
import { Link } from "react-router-dom"; // Подключение модулей React
import { motion } from "framer-motion"; // Подключение Библиотеки Framer-motion
// Импорт стилей React-slick
import "../../styles/lib/slick.css"; 
import "../../styles/lib/slick-theme.css";
// Импорт слайдера React-slick
import Slider from "react-slick"; 
// Импорт изображений
import webmade from "../../img/webmade.webp";
import checkbox from "../../img/checkbox.svg";
// Импорт компонентов
import Service_Preview from "../../components/services/Service_Preview.jsx";
import Order_Card from "../../components/services/Order_Card.jsx";
import Unique_Order_Card from "../../components/services/Unique_Order_Card.jsx";
const Order_Form = lazy(() =>
  import("../../components/services/Order_Form.jsx")
);
import Show_Order_Form from "../../js/scripts";
const Benefits = lazy(() => import("../../components/services/Benefits.jsx"));
// Импорт информации о Портфолио и настроек для Слайдера
import { TabList_main, Slider_settings } from "../../js/data.jsx"; 
// Компонент страницы "Веб-сайты" в сервисах
export default function Web_design() {
  const card_link = "https://forms.gle/neVqs5xMX5GU2nbT6"; // Ссылка на гугл форму
  // Функция вызова галочки в описаниях к услуге
  function Check() {
    return <img src={checkbox} width="15" height="15" alt="checkbox" />;
  }
  // Функция хранения имени переменной сервиса
  const [Service_name, set_Service_name] = useState("");
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Веб-сайты</title>
          <meta property="og:title" content="Feni Studio - Веб-сайты" />
          <meta property="og:url" content="https://jkenix-project.pages.dev/services/websites/" />
          <meta name="og:description" content="Закажи дизайн своего сайта от Feni Studio! " />
          <meta
            name="description"
            content="Закажи собственный веб-дизайн для сайта у студии Feni!"
          />
        </Helmet>
        <main className="l-main l-web-design">
          <Service_Preview
            title="Разработка Веб-сайтов"
            desc={`Разработаем для вас яркие и привлекательные веб-сайты!`}
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
              Как выглядит Процесс разработки веб-сайта:
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
                      className="btn-link btn-b41 btn-focus"
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
                title="Лендинг"
                Click={() => {
                  set_Service_name(`Услуга "Лендинг"`);
                  Show_Order_Form();
                }}
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
                title="Корпоративный веб-сайт"
                Click={() => {
                  set_Service_name(`Услуга "Корпоративный веб-сайт"`);
                  Show_Order_Form();
                }}
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
                title="Интернет-магазин"
                Click={() => {
                  set_Service_name(`Услуга "Интернет-магазин"`);
                  Show_Order_Form();
                }}
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
                title="SaaS"
                Click={() => {
                  set_Service_name(`Услуга "SaaS"`);
                  Show_Order_Form();
                }}
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
              <Unique_Order_Card
                Click={() => {
                  set_Service_name(`Услуга "Уникальный проект"`);
                  Show_Order_Form();
                }}
              />
            </div>
          </section>
          <div className="l-of-wrapper">
            <div
              className="l-of-overlay"
              onClick={() => {
                Show_Order_Form();
              }}></div>
            <Order_Form
              form_title={
                <>
                  <h2 className="section-title">
                    Заполните форму и мы свяжемся с вами в ближайшее время!
                  </h2>
                </>
              }
              textarea_rows_value="5"
              form_service_name={
                <>
                  <div className="l-service-info-row">
                    <input
                      id="Service-category"
                      name="Service-category"
                      type="hidden"
                      className="form-input"
                      value="Веб-дизайн"
                      maxLength="255"
                    />
                    <input
                      id="Service-name"
                      name="Service-name"
                      type="hidden"
                      className="form-input"
                      value={Service_name}
                      maxLength="255"
                    />
                  </div>
                </>
              }
            />
          </div>
          <Benefits />
        </main>
      </HelmetProvider>
    </>
  );
}
