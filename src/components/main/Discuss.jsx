import React from "react";
import LazyLoad from "react-lazy-load";
import { motion } from "framer-motion";

import mail_form from "../../img/mail-form.webp";

export default function Discuss() {
  return (
    <>
      <section className="l-feni-discuss-project" id="discuss">
        <div className="l-fdp-content l-feni-section l-fm">
          <motion.div
            className="fdp-content-info"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}>
            <h2 className="fdp-title section-title">Обсудить проект</h2>
            <p className="fdp-desc section-desc">
              Крутые проекты начинаются с заполнения этой формы
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
          <motion.form
            action="https://formspree.io/f/mqkobyen"
            method="POST"
            className="fdp-content-form"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}>
            <div className="l-feedback-row top">
              <label className="label-feedback" htmlFor="Client-name">
                Ваше имя*
              </label>
              <input
                type="text"
                id="Client-name"
                name="Client-name"
                size="40"
                className="form-input"
                aria-required="true"
                placeholder="Введите имя"
                required={true}
              />
            </div>
            <div className="l-feedback-row right">
              <label className="label-feedback" htmlFor="Client-phone">
                Телефон*
              </label>
              <input
                type="tel"
                id="Client-phone"
                name="Client-phone"
                size="40"
                className="form-input"
                aria-required="true"
                placeholder="Введите номер телефона"
                required={true}
              />
            </div>
            <div className="l-feedback-row left">
              <label className="label-feedback" htmlFor="Client-email">
                Почта*
              </label>
              <input
                type="email"
                id="Client-email"
                name="Client-email"
                size="30"
                className="form-input"
                aria-required="true"
                placeholder="Введите электронный адрес"
                required={true}
              />
            </div>
            <div className="l-feedback-row message">
              <label htmlFor="Client-message" className="label-feedback">
                Сообщение
              </label>
              <textarea
                id="Client-message"
                name="Client-message"
                maxLength="700"
                cols="40"
                rows="10"
                className="form-input message-input"
                placeholder="Введите ваше сообщение"></textarea>
            </div>
            <input
              type="submit"
              value="Отправить"
              className="feedback-btn l-feni-section"></input>
            <div className="checkbox-row">
              <p className="feni-checkbox-agree">
                Отправляя форму вы даёте согласие на обработку персональных
                данных
              </p>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
}
