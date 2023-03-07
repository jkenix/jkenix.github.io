import React, { lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

import presmade from "../../img/presmade.webp";

import Service_Preview from "../../components/services/Service_Preview.jsx";
import ScrollToTop from "../../components/main/ScrollToTop.jsx";
const Discuss = lazy(() => import("../../components/main/Discuss.jsx"));
const Order_Form = lazy(() =>
  import("../../components/services/Order_Form.jsx")
);

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
          <Service_Preview
            section_class="l-presentations l-feni-start l-feni-section l-fm"
            brif_link="https://forms.gle/Kf5J7RAoe2ZuEigc7"
            title_content={
              <>
                <h1 className="present-title section-main-title">
                  Разработка Презентаций
                </h1>
                <p className="fs-desc present-desc section-desc">
                  Мы сделаем для вас дизайн презентации, которые будут
                  масштабировать или привлекать капитал!
                </p>
              </>
            }
            img_block={
              <>
                <div className="l-fs-img present-img img__resp-block">
                  <img
                    src={presmade}
                    width="456"
                    height="456"
                    alt="Presentations preview image"
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
