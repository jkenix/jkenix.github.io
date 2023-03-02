import React, {lazy} from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop.jsx";
const Discuss = lazy(() => import("../components/Discuss.jsx"));

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
          <meta name="og:description" content="Услуги и цены Feni Design, " />
          <meta name="description" content="Закажи услугу у Feni Design" />
        </Helmet>
        <main className="l-main">
          <motion.section
            className="l-feni-services l-feni-section l-fm"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            В процессе...
          </motion.section>
          <Discuss />
        </main>
        <ScrollToTop />
      </HelmetProvider>
    </>
  );
}
