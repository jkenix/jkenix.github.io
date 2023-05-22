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
import illmade from "../../img/illmade.webp";
import checkbox from "../../img/checkbox.svg";
// Импорт компонентов
import Service_Preview from "../../components/services/Service_Preview.jsx";
import Order_Card from "../../components/services/Order_Card.jsx";
// import Unique_Order_Card from "../../components/services/Unique_Order_Card.jsx";
const Order_Form = lazy(() =>
  import("../../components/services/Order_Form.jsx")
);
import Show_Order_Form from "../../js/scripts";
const Benefits = lazy(() => import("../../components/services/Benefits.jsx"));
// Импорт информации о Портфолио и настроек для Слайдера
import { TabList_main, Slider_settings } from "../../js/data.jsx";
// Компонент страницы "Иллюстрации" в сервисах
export default function Illustrations() {
  const card_link = "https://forms.gle/G1F61kMXz7n8ZJhh7"; // Ссылка на гугл форму
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
          <title>Иллюстрации</title>
          <meta property="og:title" content="Feni Studio - Иллюстрации" />
          <meta property="og:url" content="https://jkenix-project.pages.dev/services/illustrations/" />
          <meta name="og:description" content="Закажите уникальный дизайн иллюстрации у Feni Studio!" />
          <meta
            name="description"
            content="Закажи собственный дизайн иллюстрации от Feni Studio!"
          />
        </Helmet>
        <main className="l-main lillustrations">
          <Service_Preview
            title="Разработка Иллюстраций"
            desc="Сделайте ваш проект более запоминающимся и узнаваемым с помощью наших потрясающих иллюстраций!"
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
              Как выглядит Процесс разработки иллюстраций:
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
                    Заполненяем бриф и проводим Исследования
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
                    Обсудим первых иллюстраций и внесение правки!
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
                    Доработка и передача клиенту всех согласованных файлов!
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
                      className="btn-link btn-b41 btn-focus"
                      to={"/portfolio/illustrations/"}
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
                title="Плоская/простая иллюстрация"
                Click={() => {
                  set_Service_name(`Услуга "Плоская/простая иллюстрация"`);
                  Show_Order_Form();
                }}
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
                title="Изометрическая/сложная иллюстрация"
                Click={() => {
                  set_Service_name(
                    `Услуга "Изометрическая/сложная иллюстрация"`
                  );
                  Show_Order_Form();
                }}
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
                title="3D Иллюстрация"
                Click={() => {
                  set_Service_name(`Услуга "3D Иллюстрация"`);
                  Show_Order_Form();
                }}
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
                      value="Иллюстрации"
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
