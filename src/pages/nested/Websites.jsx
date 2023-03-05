import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

import ScrollToTop from "../../components/ScrollToTop.jsx";
const Discuss = lazy(() => import("../../components/Discuss.jsx"));

export default function Websites() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Веб-сайты</title>
          <meta property="og:title" content="Feni Design - Веб-сайты" />
          {/* <meta property="og:url" content="https://jkenix.github.io/sercices" /> */}
          {/* <meta name="og:description" content="Услуги и цены Feni Design, " /> */}
          <meta
            name="description"
            content="Закажи собственный веб-сайт от Feni Design!"
          />
        </Helmet>
        <main className="l-main">
          <motion.section
            className="l-websites l-feni-start l-feni-section l-fm"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <div className="fs-content fh-content">
              <h1 className="fh-title">Feni Design</h1>
              <h2 className="section-title">
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
            <div className="fs-img img__resp-block">
              <img
                src={feni_start}
                width="438"
                height="452"
                alt="Feni Studio preview image"
                loading="eager"
              />
            </div>
          </motion.section>
        </main>
        <ScrollToTop />
      </HelmetProvider>
    </>
  );
}