import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

import Service from "../components/Service.jsx";

import ScrollToTop from "../components/main/ScrollToTop.jsx";
import Discuss from "../components/main/Discuss.jsx";

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
          <meta
            name="description"
            content="Закажи услугу у Feni Design Studio"
          />
        </Helmet>
        <main className="l-main l-services">
          <motion.section
            className="l-fs-title l-feni-section l-fm"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <h1 className="fs-title">Выберите услуги по дизайну от Feni Studio!</h1>
          </motion.section>
          <section className="l-feni-services l-feni-section l-fm">
            <Service
              title="Веб-дизайн"
              desc="Разрабатываем дизайн для интернет-магазинов, лендингов, корпоративных сайтов и продуктов SaaS"
              link={{ pathname: location.pathname + `web-design/` }}
            />
            <Service
              title="Логотипы"
              desc="Мы создадим логотип в любом стиле от геральдики до минимализма!"
              link={{ pathname: location.pathname + `logos/` }}
            />
            <Service
              title="Айдентика"
              desc="Мы занимаемся дизайном логотипов, элементов фирменного стиля"
              link={{ pathname: location.pathname + `identify/` }}
            />
            <Service
              title="Иллюстрации"
              desc="Для приложений, веб-сайтов, креативов, презентаций и так далее."
              link={{ pathname: location.pathname + `illustrations/` }}
            />
            <Service
              title="Презентации"
              desc="Услуги по дизайну презентаций для стартапов, стремящихся масштабировать или привлечь капитал"
              link={{ pathname: location.pathname + `presentations/` }}
            />
          </section>
          <Discuss />
        </main>
        <ScrollToTop />
      </HelmetProvider>
    </>
  );
}
