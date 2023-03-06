import React, { lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Service from "../components/Service.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import Discuss from "../components/Discuss.jsx";

export default function Services() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Услуги и цены - Feni</title>
          <meta
            property="og:title"
            content="Услуги и цены - Feni Design Studio"
          />
          {/* <meta property="og:url" content="https://jkenix.github.io/sercices" /> */}
          {/* <meta name="og:description" content="Услуги и цены Feni Design, " /> */}
          <meta name="description" content="Закажи услугу у Feni Design" />
        </Helmet>
        <main className="l-main">
          <section
            className="l-feni-services l-feni-section l-fm"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <Service
              title="Веб-сайты"
              desc="Разрабатываем дизайн для интернет-магазинов, лендингов, корпоративных сайтов и продуктов SaaS"
              link={{ pathname: location.pathname + `/websites` }}
            />
            <Service
              title="Логотипы"
              desc="Мы создадим логотип в любом стиле от геральдики до минимализма!"
              link={{ pathname: location.pathname + `/logos` }}
            />
            <Service
              title="Айдентика"
              desc="Мы занимаемся дизайном логотипов, элементов фирменного стиля"
              link={{ pathname: location.pathname + `/identify` }}
            />
            <Service
              title="Иллюстрации"
              desc="Для приложений, веб-сайтов, креативов, презентаций и так далее."
              link={{ pathname: location.pathname + `/illustrations` }}
            />
            <Service
              title="Презентации"
              desc="Услуги по дизайну презентаций для стартапов, стремящихся масштабировать или привлечь капитал"
              link={{ pathname: location.pathname + `/presentations` }}
            />
          </section>
          <Discuss />
        </main>
        <ScrollToTop />
      </HelmetProvider>
    </>
  );
}
