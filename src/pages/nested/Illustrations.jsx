import React, { lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

import illmade from "../../img/illmade.webp";

import Service_Preview from "../../components/services/Service_Preview.jsx";
import ScrollToTop from "../../components/main/ScrollToTop.jsx";
const Discuss = lazy(() => import("../../components/main/Discuss.jsx"));
const Order_Form = lazy(() =>
  import("../../components/services/Order_Form.jsx")
);

export default function Illustrations() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Иллюстрации</title>
          <meta property="og:title" content="Feni Design - Иллюстрации" />
          {/* <meta property="og:url" content="https://jkenix.github.io/about" /> */}
          {/* <meta name="og:description" content="" /> */}
          <meta
            name="description"
            content="Закажи собственные иллюстрации от Feni Design!"
          />
        </Helmet>
        <main className="l-main">
          <Service_Preview
            section_class="l-illustrations l-feni-start l-feni-section l-fm"
            brif_link="https://forms.gle/G1F61kMXz7n8ZJhh7"
            title_content={
              <>
                <h1 className="ill-title section-main-title">
                  Разработка Иллюстраций
                </h1>
                <p className="fs-desc ill-desc section-desc">
                  Сделайте свой сайт, рекламу или приложение более
                  запоминающимся и узнаваемым с помощью наших уникальных
                  иллюстраций!
                </p>
              </>
            }
            img_block={
              <>
                <div className="l-fs-img ill-img img__resp-block">
                  <img
                    src={illmade}
                    width="425"
                    height="425"
                    alt="Illustrations preview image"
                    loading="eager"
                  />
                </div>
              </>
            }
          />
          <Discuss />
        </main>
        <ScrollToTop />
      </HelmetProvider>
    </>
  );
}
