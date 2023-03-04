import { React, useState, lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { TabList_main } from "../js/data.jsx";
import LazyLoad from "react-lazy-load";

import feni_start from "../img/feni-start.webp";
import more from "../img/more.svg";
import partners from "../img/partners.webp";

const Discuss = lazy(() => import("../components/Discuss.jsx"));
import ScrollToTop from "../components/ScrollToTop.jsx";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("tab1");
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Feni - Студия веб-дизайна</title>
          <meta property="og:title" content="Студия веб-дизайна Feni" />
          {/* <meta property="og:url" content="URL/" /> */}
          <meta
            name="og:description"
            content="Мы помогаем зарабатывать в интернете с ярким веб-дизайном!"
          />
          <meta
            name="description"
            content="Задизайним проект по высшему разряду!"
          />
        </Helmet>
        <main className="l-main">
          <motion.section
            className="l-feni-hi l-feni-start l-feni-section l-fm"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <div className="l-fs-content l-fh-content">
              <h1 className="fh-title section-main-title">Feni Design</h1>
              <h2 className="fs-desc section-title">
                Мы помогаем зарабатывать в интернете
              </h2>
              <button
                className="btn-link btn-bw55"
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
              Мы онлайн дизайн студия, которая помогает нашим клиентам по всему
              миру получать осмысленный дизайн, создавая значимые связи между
              людьми и брендами!
            </motion.h2>
            <motion.p
              className="feni-info-desc section-desc"
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}>
              Выполняем проекты для ведущих веб-студий по всему миру в качестве
              субподрядчиков. Ключевой состав команды работает с момента
              основания компании. Мы гарантируем индивидуальный подход к каждому
              новому веб-сайту, логотипу, и/или фирменному стилю.
            </motion.p>
          </section>
          <section className="l-feni-preview">
            <motion.div
              className="l-fp-section-title l-feni-section l-fm"
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}>
              <h2 className="fp-title section-title">Наши работы</h2>
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
                  to={"/portfolio/all_works"}
                  title="Все работы">
                  Все работы
                  <img src={more} width={"25"} height={"8"} alt="more arrow" />
                </Link>
              </div>
            </motion.div>
            {TabList_main.map((tab, i) => {
              if (tab.name === currentTab) {
                return (
                  <div
                    className="l-fp-section-content works-content l-feni-section l-fm"
                    key={i}>
                    {tab.content}
                    <Link
                      className="btn-link btn-b55 btn-focus"
                      to={"/portfolio/all_works"}
                      title="Все работы">
                      Все работы
                    </Link>
                  </div>
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
              Помогите нам, сделать ваш проект лучше! После заполнения брифа, Мы
              свяжемся с вами в ближайшее время!
            </p>
            <div className="feni-briefs-content">
              <a
                href="https://forms.gle/neVqs5xMX5GU2nbT6"
                className="fb-info l-fm fbi-main">
                <span className="fb-count small-section">01</span>
                <span className="fb-title">Веб Дизайн</span>
                <span className="fb-desc section-desc">
                  бриф на разработку веб дизайна
                </span>
              </a>
              <a href="https://forms.gle/Tvioeac6DhDZxu9N9" className="fb-info l-fm fbi-block">
                <span className="fb-count small-section">02</span>
                <span className="fb-title">Лого</span>
                <span className="fb-desc section-desc">
                  бриф на разработку логотипа
                </span>
              </a>
              <a href="https://forms.gle/G1F61kMXz7n8ZJhh7" className="fb-info l-fm fbi-block">
                <span className="fb-count small-section">03</span>
                <span className="fb-title">Иллюстрация</span>
                <span className="fb-desc section-desc">
                  бриф на разработку иллюстрации
                </span>
              </a>
              <a href="https://forms.gle/Kf5J7RAoe2ZuEigc7" className="fb-info l-fm fbi-block">
                <span className="fb-count small-section">04</span>
                <span className="fb-title">Презентация</span>
                <span className="fb-desc section-desc">
                  бриф на разработку презентации
                </span>
              </a>
              <a href="https://forms.gle/BzdVa4kz1FFwy36P7" className="fb-info l-fm fbi-block">
                <span className="fb-count small-section">05</span>
                <span className="fb-title">Айдентика</span>
                <span className="fb-desc section-desc">
                  бриф на разработку айдентики
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
                Гордимся сотрудничеством с лидерами своих отраслей и счастливы
                быть их digital-партнером
              </p>
            </motion.div>
            <div className="feni-partners-img img__rubber">
              <LazyLoad className="fp-img" height={540} offset={100}>
                <img src={partners} width="618" height="540" alt="clients" />
              </LazyLoad>
            </div>
          </section>
          <Discuss />
        </main>
        <ScrollToTop />
      </HelmetProvider>
    </>
  );
}
