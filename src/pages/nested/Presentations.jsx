import React, {lazy} from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

import ScrollToTop from "../../components/ScrollToTop.jsx";
const Discuss = lazy(() => import("../../components/Discuss.jsx"));

export default function Presentations() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Презентации</title>
          <meta property="og:title" content="Feni Design - Презентации" />
          {/* <meta property="og:url" content="https://jkenix.github.io/about" /> */}
          {/* <meta name="og:description" content="" /> */}
          <meta
            name="description"
            content="Закажи собственные презентации от Feni Design!"
          />
        </Helmet>
        <main className="l-main">
          <motion.section
            className="l-presentations l-feni-start l-feni-section l-fm"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <div className="fs-content fh-content">
              <h1 className="fh-title">Разработка Презентаций</h1>
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
                src={""}
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
