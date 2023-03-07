import React, { useState, lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

import logomake from "../../img/logomake.webp";

import Service_Preview from "../../components/services/Service_Preview.jsx";
import ScrollToTop from "../../components/main/ScrollToTop.jsx";
const Discuss = lazy(() => import("../../components/main/Discuss.jsx"));
const Order_Form = lazy(() =>
  import("../../components/services/Order_Form.jsx")
);

export default function Logos() {
  const [count, setCount] = useState("");
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
          <Service_Preview
            section_class="l-logos l-feni-start l-feni-section l-fm"
            brif_link="https://forms.gle/Tvioeac6DhDZxu9N9"
            title_content={
              <>
                <h1 className="logos-title section-main-title">Разработка Логотипов</h1>
                <p className="fs-desc logos-desc section-desc">
                  Вы хорошо знаете свой бизнес, а мы знаем как сделать хороший
                  дизайн! И будем рады сделать лого для вашей: Компании,
                  Приложения или Сайта.
                </p>
              </>
            }
            img_block={
              <>
                <div className="l-fs-img logos-img img__resp-block">
                  <img
                    src={logomake}
                    width="472"
                    height="472"
                    alt="Logos preview image"
                    loading="eager"
                  />
                </div>
              </>
            }
          />
          {/* <button onClick={() => setCount("xui")}>Click me</button>
          <Order_Form count={count} /> */}
          <Discuss />
        </main>
        <ScrollToTop />
      </HelmetProvider>
    </>
  );
}
