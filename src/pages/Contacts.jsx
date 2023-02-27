import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import Discuss from "../components/Discuss.jsx";

import contacts_img from "../img/feni-contacts.webp";

export default function Contacts() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Контакты - Feni</title>
          <meta property="og:title" content="Контакты - Feni Design" />
          <meta property="og:url" content="https://jkenix.github.io/contacts" />
          {/* <meta name="og:description" content="" />
          <meta name="description" content="" /> */}
        </Helmet>
        <main className="l-main">
          <motion.section
            className="l-feni-contacts l-feni-section l-fm"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <div className="fcon-img img__resp-block">
              <img
                src={contacts_img}
                width="504"
                height="504"
                alt="Feni contacts"
                loading="eager"
              />
            </div>
            <div className="fcon-content">
              <div className="contact-info mail">
                <h2 className="contacts-title small-section">Телефон</h2>
                <a href="tel:+38-097-757-51-51" className="contacts-link">
                  +38 (097) 757 51 51
                </a>
              </div>
              <div className="contact-info num">
                <h2 className="contacts-title small-section">Почта</h2>
                <a href="mailto:feni@studio.com" className="contacts-link">
                  feni@studio.com
                </a>
              </div>
            </div>
          </motion.section>
          <Discuss />
        </main>
      </HelmetProvider>
    </>
  );
}
