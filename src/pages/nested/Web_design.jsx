import React, { useState, lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

import webmade from "../../img/webmade.webp";

import Service_Preview from "../../components/services/Service_Preview.jsx";
import ScrollToTop from "../../components/main/ScrollToTop.jsx";
const Discuss = lazy(() => import("../../components/main/Discuss.jsx"));
const Order_Form = lazy(() =>
  import("../../components/services/Order_Form.jsx")
);

export default function Web_design() {
  const [count, setCount] = useState("");
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
          <Service_Preview
            section_class="l-web-design l-feni-start l-feni-section l-fm"
            brif_link="https://forms.gle/neVqs5xMX5GU2nbT6"
            title_content={
              <>
                <h1 className="wd-title section-main-title">Веб-дизайн</h1>
                <p className="fs-desc wd-desc section-desc">
                  «Если вашего бизнеса нет в Интернете, то ваш бизнес не будет
                  работать» - <strong>Билл Гейтс</strong>
                </p>
              </>
            }
            img_block={
              <>
                <div className="l-fs-img wd-img img__resp-block">
                  <img
                    src={webmade}
                    width="533"
                    height="453"
                    alt="Web-design preview image"
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
