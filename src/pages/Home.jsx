import { React, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import { TabList_main } from "../js/data.jsx";
import more from "../img/more.svg";
import feni_start from "../img/feni-start.webp";

export default function Home(props) {
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
          <section className="l-feni-start l-feni-hi l-feni-section">
            <div className="fs-content fh-content">
              <h1 className="fh-title">Feni Design</h1>
              <h2 className="section-title">
                Мы помогаем зарабатывать в интернете
              </h2>
              <button className="btn-link btn-bw55">Обсудить проект</button>
            </div>
            <div className="fs-img img__resp-block">
              <img
                src={feni_start}
                alt="Feni Studio preview image"
                loading="eager"
              />
            </div>
          </section>
          <section className="l-feni-info l-feni-section">
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
            <div className="l-fp-section-title l-feni-section">
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
                <Link className="btn-tab-link" to={"/portfolio/all_works"}>
                  Все работы
                  <img src={more} width={"25"} height={"8"} alt="more arrow" />
                </Link>
              </div>
            </div>
            {TabList_main.map((tab, i) => {
              if (tab.name === currentTab) {
                return (
                  <div className="l-fp-section-content works-content l-feni-section" key={i}>
                    {tab.content}
                    <Link className="btn-link btn-b55 l-feni-section">Все работы</Link>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </section>
        </main>
      </HelmetProvider>
    </>
  );
}
