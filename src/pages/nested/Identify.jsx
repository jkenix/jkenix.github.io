import React, { lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

import identitymake from "../../img/identitymake.webp";

import Service_Preview from "../../components/services/Service_Preview.jsx";
import ScrollToTop from "../../components/main/ScrollToTop.jsx";
const Discuss = lazy(() => import("../../components/main/Discuss.jsx"));
const Order_Form = lazy(() =>
  import("../../components/services/Order_Form.jsx")
);

export default function Identify() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Айдентика</title>
          <meta property="og:title" content="Feni Design - Айдентика" />
          {/* <meta property="og:url" content="https://jkenix.github.io/about" /> */}
          {/* <meta name="og:description" content="" /> */}
          <meta
            name="description"
            content="Закажи собственный фирменный стиль от Feni Design!"
          />
        </Helmet>
        <main className="l-main">
          <Service_Preview
            section_class="l-identify l-feni-start l-feni-section l-fm"
            brif_link="https://forms.gle/BzdVa4kz1FFwy36P7"
            title_content={
              <>
                <h1 className="identify-title section-main-title">
                  Разработка Фирменного стиля
                </h1>
                <p className="fs-desc identify-desc section-desc">
                  Создайте незабываемое первое впечатление, с помощью
                  потрясающего визуального стиля вашего бренда!
                </p>
              </>
            }
            img_block={
              <>
                <div className="l-fs-img identify-img img__resp-block">
                  <img
                    src={identitymake}
                    width="477"
                    height="477"
                    alt="Identify preview image"
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
