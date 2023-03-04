import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

import ScrollToTop from "../../components/ScrollToTop.jsx";
const Discuss = lazy(() => import("../../components/Discuss.jsx"));

export default function Logos() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Логотипы</title>
          <meta property="og:title" content="Feni Design - Логотипы" />
          {/* <meta property="og:url" content="https://jkenix.github.io/about" /> */}
          {/* <meta name="og:description" content="" /> */}
          <meta
            name="description"
            content="Закажи собственные логотипы от Feni Design!"
          />
        </Helmet>
        <main className="l-main">
          <motion.section
            className="l-logos l-feni-start l-feni-section l-fm"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <div className="logos-preview">
              <h1 className="fh-title">Разработка Айдентики</h1>
              <p className="lp-desc section-desc">
                Вы хорошо знаете свой бизнес, а мы знаем как сделать хороший
                дизайн! И будем рады сделать лого для вашей: Компании,
                Приложения или Сайта.
              </p>
              <div className="logos-info">

              </div>
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
