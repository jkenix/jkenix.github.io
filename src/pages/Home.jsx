import { React, useState, lazy } from "react"; // Подключение модулей React
import { Helmet, HelmetProvider } from "react-helmet-async"; // Импорт модулей Helmet
import { Link } from "react-router-dom"; // Подключение модулей React
import LazyLoad from "react-lazy-load"; // Подключение модулей React
import { motion } from "framer-motion"; // Подключение Библиотеки Framer-motion
// Импорт информации о Портфолио для "Главной страницы"
import { TabList_main } from "../js/data.jsx";
// Импорт изображений
import feni_start from "../img/feni-start.webp";
import more from "../img/more.svg";
import partners from "../img/partners.webp";
// Компонент Главной страницы
export default function Home() {
  const [currentTab, setCurrentTab] = useState("tab1");
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Feni - Студия веб-дизайна</title>
          <meta property="og:title" content="Студия веб-дизайна Feni Studio" />
          <meta property="og:url" content="https://jkenix-project.pages.dev/" />
          <meta
            name="og:description"
            content="Feni - российская студия веб-дизайна. Оказываем услуги высочайшего качества в области веб-дизайна нашим клиентам из России!"
          />
          <meta
            name="description"
            content="Feni Studio - российская студия веб-дизайна. Поможем Вам разработать свой уникальный веб-дизайн!"
          />
        </Helmet>
        <main className="l-main">
          <motion.section
            className="l-feni-hi l-feni-start l-feni-section l-fm"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <div className="l-fs-content l-fh-content">
              <h1 className="fh-title section-main-title">Feni Studio</h1>
              <h2 className="fs-desc section-title">
                Мы помогаем зарабатывать в интернете
              </h2>
              <button
                className="btn-link btn-bw41"
                onClick={() => {
                  document.getElementById("discuss").scrollIntoView();
                }}>
                Обсудить проект
              </button>
            </div>
            <div className="l-fs-img img__resp-block">
              <img
                src={feni_start}
                width="438"
                height="452"
                alt="Feni Studio preview image"
                loading="eager"
              />
            </div>
          </motion.section>
          <section className="l-feni-info l-feni-section l-fm">
            <span className="small-section">О нас</span>
            <motion.h2
              className="feni-info-title section-title"
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
              Мы студия Web-дизайна, которая помогает нашим клиентам по всей
              России получать осмысленный дизайн, создавая значимые связи между
              людьми и брендами!
            </motion.h2>
            <motion.p
              className="feni-info-desc section-desc"
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}>
              Выполняем проекты для клиентов по всей России. В составе команды
              присутствуют опытные разработчики и контент-менеджеры. Мы
              гарантируем индивидуальный подход к каждому новому веб-сайту,
              логотипу, презентации, иллюстрации и фирменному стилю.
            </motion.p>
          </section>
          <section className="l-feni-preview">
            <motion.div
              className="l-fp-section-title l-feni-section l-fm"
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}>
              <h2 className="fp-title section-title">Наше портфолио</h2>
              <div className="fp-works-tabs works-tabs">
                {TabList_main.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTab(tab.name)}
                    className={
                      tab.name === currentTab ? "btn-tab active" : "btn-tab"
                    }>
                    {tab.label}
                    <span className="btn-tab-num">{tab.num}</span>
                  </button>
                ))}
                <Link
                  className="btn-tab-link"
                  to={"/portfolio/all_works/"}
                  title="Все работы">
                  Все работы
                  <img src={more} width={"25"} height={"8"} alt="more arrow" />
                </Link>
              </div>
            </motion.div>
            {TabList_main.map((tab, i) => {
              if (tab.name === currentTab) {
                return (
                  <motion.div
                    className="l-fp-section-content works-content l-feni-section l-fm"
                    key={i}
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}>
                    {tab.content}
                    <Link
                      className="btn-link btn-b41 btn-focus"
                      to={"/portfolio/all_works/"}>
                      Просмотреть все наши работы
                    </Link>
                  </motion.div>
                );
              } else {
                return null;
              }
            })}
          </section>
          <motion.section
            className="l-feni-briefs l-feni-section l-fm"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}>
            <h2 className="feni-briefs-title section-title">Брифы</h2>
            <p className="feni-briefs-desc section-desc">
              Помогите нам улучшить нашу работу! Заполните бриф и Мы свяжемся с
              Вами в ближайшее время!
            </p>
            <div className="feni-briefs-content">
              <a
                href="https://forms.gle/neVqs5xMX5GU2nbT6"
                className="fb-info l-fm fbi-main">
                <span className="fb-count small-section">01</span>
                <span className="fb-title">Веб-сайт</span>
                <span className="fb-desc section-desc">
                  Бриф на разработку веб-сайта
                </span>
              </a>
              <a
                href="https://forms.gle/Tvioeac6DhDZxu9N9"
                className="fb-info l-fm fbi-block">
                <span className="fb-count small-section">02</span>
                <span className="fb-title">Лого</span>
                <span className="fb-desc section-desc">
                  Бриф на разработку логотипа
                </span>
              </a>
              <a
                href="https://forms.gle/G1F61kMXz7n8ZJhh7"
                className="fb-info l-fm fbi-block">
                <span className="fb-count small-section">03</span>
                <span className="fb-title">Иллюстрация</span>
                <span className="fb-desc section-desc">
                  Бриф на разработку иллюстрации
                </span>
              </a>
              <a
                href="https://forms.gle/Kf5J7RAoe2ZuEigc7"
                className="fb-info l-fm fbi-block">
                <span className="fb-count small-section">04</span>
                <span className="fb-title">Презентация</span>
                <span className="fb-desc section-desc">
                  Бриф на разработку презентации
                </span>
              </a>
              <a
                href="https://forms.gle/BzdVa4kz1FFwy36P7"
                className="fb-info l-fm fbi-block">
                <span className="fb-count small-section">05</span>
                <span className="fb-title">Айдентика</span>
                <span className="fb-desc section-desc">
                  Бриф на разработку айдентики
                </span>
              </a>
            </div>
          </motion.section>
          <section className="l-feni-partners l-feni-section l-fm">
            <motion.div
              className="feni-partners-desc l-feni-section"
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}>
              <h2 className="fp-title section-title">Клиенты</h2>
              <p className="fp-desc section-desc l-feni-section">
                Гордимся работой с лидерами своей отрасли и счастливы быть их
                близким партнером!
              </p>
            </motion.div>
            <div className="feni-partners-img img__rubber">
              <LazyLoad className="fp-img" height={540} offset={100}>
                <img src={partners} width="618" height="540" alt="clients" />
              </LazyLoad>
            </div>
          </section>
        </main>
      </HelmetProvider>
    </>
  );
}
