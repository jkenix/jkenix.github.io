import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import ScrollToTop from "../../components/ScrollToTop.jsx";

export default function Illustrations() {
  return (
    <>
      <main className="l-main">
        <motion.section
          className="l-illustrations l-feni-start l-feni-section l-fm"
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
    </>
  );
}