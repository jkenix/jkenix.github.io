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
import identitymake from "../../img/identitymake.webp";
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
// Компонент страницы "Айдентика" в сервисах
export default function Identify(props) {
  const card_link = "https://forms.gle/BzdVa4kz1FFwy36P7"; // Ссылка на гугл форму
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
          <title>Айдентика</title>
          <meta property="og:title" content="Feni Studio - Айдентика" />
          <meta
            property="og:url"
            content="https://jkenix-project.pages.dev/services/identify/"
          />
          <meta
            name="og:description"
            content="Закажите дизайн своего фирменного стиля у Feni Studio!"
          />
          <meta
            name="description"
            content="Закажи собственный дизайн фирменного стиля от Feni Studio!"
          />
        </Helmet>
        <main className="l-main l-identify">
          <Service_Preview
            title="Разработка Фирменного стиля"
            desc="Создайте незабываемое первое впечатление, с помощью
            потрясающего визуального стиля вашего бренда!"
            brif_link={card_link}
            img_content={
              <>
                <img
                  src={identitymake}
                  width="477"
                  height="477"
                  alt="Identify preview image"
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
              Как выглядит Процесс разработки фирменного стиля:
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
                    Мы создаем креативный бриф
                  </p>
                </div>
                <div className="process-dev-content">
                  <span className="pd-num">03</span>
                  <p className="pd-desc section-desc">
                    Исследования (создание мудбордов, эскизов и стилей)
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">04</span>
                  <p className="pd-desc section-desc">Обзор и обратная связь</p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">05</span>
                  <p className="pd-desc section-desc">Разработка</p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">06</span>
                  <p className="pd-desc section-desc">
                    Выбор фирменных цветов (основных и дополнительных)
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">07</span>
                  <p className="pd-desc section-desc">
                    Выбор фирменных шрифтов
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">08</span>
                  <p className="pd-desc section-desc">
                    Создание всех остальных элементов бренда (шаблоны,
                    изображения иконок и т. д.)
                  </p>
                </div>
                <div className="process-dev-content pdc-up">
                  <span className="pd-num">09</span>
                  <p className="pd-desc section-desc">
                    Создание окончательных файлов для каждого элемента бренда
                  </p>
                </div>
              </Slider>
            </div>
          </motion.section>
          <section className="l-service-works l-feni-section l-fm">
            <h2 className="service-works-title section-title">Примеры работ</h2>
            {TabList_main.map((tab, i) => {
              if (tab.name === "tab3") {
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
                      to={"/portfolio/identify/"}
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
            <div className="l-project-prices l-pp-identify">
              <Order_Card
                title="Стартап"
                Click={() => {
                  set_Service_name(`Услуга "Стартап"`);
                  Show_Order_Form();
                }}
                price="От 50000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">Логотип</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Цветовая схема
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">Типография</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">Визитка</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Фирменный бланк
                      </span>
                    </li>
                  </>
                }
              />
              <Order_Card
                title="Компания"
                Click={() => {
                  set_Service_name(`Услуга "Компания"`);
                  Show_Order_Form();
                }}
                price="От 75000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc-strong small-section">
                        Услуги пакета "Стартап"
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Паттерн/формы
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">Иконки</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">Иллюстрация</span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Оформление соц. сетей
                      </span>
                    </li>
                  </>
                }
              />
              <Order_Card
                title="Корпорация"
                Click={() => {
                  set_Service_name(`Услуга "Корпорация"`);
                  Show_Order_Form();
                }}
                price="От 110000₽"
                points={
                  <>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc-strong small-section">
                        Услуги пакета "Компания"
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Маскот/Персонаж
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">
                        Изображения (подбор стиля)
                      </span>
                    </li>
                    <li className="project-point">
                      <Check />
                      <span className="pp-desc small-section">Брендбук</span>
                    </li>
                  </>
                }
              />
              <Unique_Order_Card
                Click={() => {
                  {
                    set_Service_name(`Услуга "Уникальный проект"`);
                    Show_Order_Form();
                  }
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
                      value="Айдентика"
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
