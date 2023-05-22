import React from "react"; // Подключение модулей React
import { Helmet, HelmetProvider } from "react-helmet-async"; // Импорт модулей Helmet
import { motion } from "framer-motion"; // Подключение Библиотеки Framer-motion
// Импорт изображений
import contacts_img from "../img/feni-contacts.webp";
import vklogo from "../img/vk-logo.svg";
import telegram from "../img/telegram-logo.svg";
import wapp from "../img/wapp-logo.svg";
// Компонент страницы "Контакты"
export default function Contacts() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Контакты - Feni</title>
          <meta property="og:title" content="Контакты - Feni Studio" />
          <meta property="og:url" content="https://jkenix-project.pages.dev/contacts/" />
          <meta name="og:description" content="Контактные данные студии Feni" />
          <meta name="description" content="Свяжитесь со студией Feni!" />
        </Helmet>
        <main className="l-main l-contacts">
          <motion.section
            className="l-feni-contacts-title l-feni-section l-fm"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <h2 className="section-title">Оставайтесь с нами на связи!</h2>
          </motion.section>
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
                <a href="tel:+7-963-728-66-90" className="contacts-link">
                  +7-963-728-66-90
                </a>
              </div>
              <div className="contact-info num">
                <h2 className="contacts-title small-section">Почта</h2>
                <a href="mailto:feni@studio.com" className="contacts-link">
                  feni@studio.com
                </a>
              </div>
              <div className="contact-info media">
                <h2 className="contacts-title small-section">
                  Cоциальные сети
                </h2>
                <div className="feni-media">
                  <a href="#" title="Группа в VK">
                    <img src={vklogo} width="40" height="40" alt="Vk" />
                  </a>
                  <a href="#" title="Группа в Telegram">
                    <img src={telegram} width="40" height="40" alt="Vk" />
                  </a>
                  <a href="#" title="Связь в Whatsapp">
                    <img src={wapp} width="40" height="40" alt="Vk" />
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
      </HelmetProvider>
    </>
  );
}
