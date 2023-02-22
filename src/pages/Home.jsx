import { React, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import { TabList_main } from "../js/data.jsx";
import LazyLoad from "react-lazy-load";
import more from "../img/more.svg";
import partners from "../img/partners.webp";
import feni_start from "../img/feni-start.webp";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("tab1");
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Feni - Студия веб-дизайна</title>
          <meta property="og:title" content="Студия веб-дизайна Feni" />
          {/* <meta property="og:url" content="URL/" /> */}
          {/* <meta name="og:description" content="" /> */}
          {/* <meta
            name="description"
            content=""
          /> */}
        </Helmet>
        <main className="l-main">
          <section className="l-feni-start l-feni-hi l-feni-section l-fm">
            <div className="fs-content fh-content">
              <h1 className="fh-title">Feni Design</h1>
              <h2 className="section-title">
                Мы помогаем зарабатывать в интернете
              </h2>
              <button className="btn-link btn-bw55">Обсудить проект</button>
            </div>
            <div className="fs-img img__resp-block">
              <img
                src={feni_start} width="438" height="452"
                alt="Feni Studio preview image"
                loading="eager"
              />
            </div>
          </section>
          <section className="l-feni-info l-feni-section l-fm">
            <span className="small-section">О нас</span>
            <h2 className="feni-info-title section-title">
              Мы онлайн дизайн студия, которая, помогает нашим клиентам по всему
              миру получать осмысленный дизайн, создавая, значимые связи между
              людьми и брендами!
            </h2>
            <p className="feni-info-desc section-desc">
              Выполняем проекты для ведущих веб-студий по всему миру в качестве
              субподрядчиков. Ключевой состав команды работает с момента
              основания компании. Мы гарантируем индивидуальный подход к каждому
              новому веб-сайту, логотипу, и/или фирменному стилю.
            </p>
          </section>
          <section className="l-feni-preview">
            <div className="l-fp-section-title l-feni-section l-fm">
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
            </div>
            {TabList_main.map((tab, i) => {
              if (tab.name === currentTab) {
                return (
                  <div
                    className="l-fp-section-content works-content l-feni-section l-fm"
                    key={i}>
                    {tab.content}
                    <Link
                      className="btn-link btn-b55 l-feni-section"
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
          <section className="l-feni-briefs l-feni-section l-fm">
            <h2 className="feni-briefs-title section-title">Брифы</h2>
            <p className="feni-briefs-desc section-desc">
              Помогите нам, сделать ваш проект лучше! После заполнения брифа, Мы
              свяжемся с вами в ближайшее время!
            </p>
            <div className="feni-briefs-content">
              <Link to="/" className="fb-info l-fm fbi-main">
                <span className="fb-count small-section">01</span>
                <span className="fb-title">Веб Дизайн</span>
                <span className="fb-desc section-desc">
                  бриф на разработку веб дизайна
                </span>
              </Link>
              <Link to="/" className="fb-info l-fm fbi-block">
                <span className="fb-count">02</span>
                <span className="fb-title">Лого</span>
                <span className="fb-desc section-desc">
                  бриф на разработку лого
                </span>
              </Link>
              <Link to="/" className="fb-info l-fm fbi-block">
                <span className="fb-count">03</span>
                <span className="fb-title">Иллюстрация</span>
                <span className="fb-desc section-desc">
                  бриф на разработку иллюстрации
                </span>
              </Link>
              <Link to="/" className="fb-info l-fm fbi-block">
                <span className="fb-count">04</span>
                <span className="fb-title">Призентация</span>
                <span className="fb-desc section-desc">
                  бриф на разработку веб дизайна
                </span>
              </Link>
              <Link to="/" className="fb-info l-fm fbi-block">
                <span className="fb-count">05</span>
                <span className="fb-title">Фирменный стиль</span>
                <span className="fb-desc section-desc">
                  бриф на разработку стиля
                </span>
              </Link>
            </div>
          </section>
          <section className="l-feni-partners l-feni-section l-fm">
            <div className="feni-partners-desc l-feni-section">
              <h2 className="fp-title section-title">Клиенты</h2>
              <p className="fp-desc section-desc l-feni-section">
                Гордимся сотрудничеством с лидерами своих отраслей и счастливы
                быть их digital-партнером
              </p>
            </div>
            <div className="feni-partners-img img__rubber">
              <LazyLoad height={540} offset={100}>
                <img src={partners} width="618" height="540" alt="clients" />
              </LazyLoad>
            </div>
          </section>
          <section className="l-feni-discuss-project">

          </section>
        </main>
      </HelmetProvider>
    </>
  );
}
