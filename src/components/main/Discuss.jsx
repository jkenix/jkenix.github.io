import React from "react"; // Подключение модулей React
import LazyLoad from "react-lazy-load"; // Подключение модулей Webpack
import { motion } from "framer-motion"; // // Подключение Библиотеки Framer-motion

import Form from "../Form.jsx"; // Импорт компонента формы
import mail_form from "../../img/mail-form.webp"; // Импорт изображения
// Компонент блока с формой "Обсудить проект"
export default function Discuss(props) {
  return (
    <>
      <section className="l-feni-discuss-project" id="discuss">
        <div className="l-fdp-content l-feni-section l-fm">
          <motion.div
            className="l-fdp-content-info"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}>
            <h2 className="fdp-title section-title">Обсудить ваш проект</h2>
            <p className="fdp-desc section-desc">
              Напишите нам ваши предложения по проекту
            </p>
            <LazyLoad height={366} offset={100} className="rel form-img-block">
              <img
                src={mail_form}
                className="form-img"
                alt="Mail form"
                width={533}
              />
            </LazyLoad>
          </motion.div>
          <Form
            class="l-fdp-content-form l-feni-form"
            initial={{ y: 100, opacity: 0 }}
            form_link_service="https://formspree.io/f/mgebyljo"
          />
        </div>
      </section>
    </>
  );
}
