import React from "react";
import LazyLoad from "react-lazy-load";
import { motion } from "framer-motion";

import mail_form from "../img/mail-form.webp";

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
            className="fdp-content-form"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}>
            <div className="feedback-row top">
              <label className="label-feedback" htmlFor="your-name">
                Ваше имя*
              </label>
              <input
                type="text"
                id="your-name"
                name="your-name"
                size="40"
                className="form-input"
                aria-required="true"
                aria-invalid="false"
                placeholder="введите ваше имя"
                required={true}
              />
            </div>
            <div className="feedback-row right">
              <label className="label-feedback" htmlFor="your-phone">
                Телефон*
              </label>
              <input
                type="tel"
                id="your-phone"
                name="your-phone"
                size="40"
                className="form-input"
                aria-required="true"
                aria-invalid="false"
                placeholder="введите номер телефона"
                required={true}
              />
            </div>
            <div className="feedback-row left">
              <label className="label-feedback" htmlFor="your-email">
                Email*
              </label>
              <input
                type="email"
                id="your-email"
                name="your-email"
                size="30"
                className="form-input"
                aria-required="true"
                aria-invalid="false"
                placeholder="введите электронный адрес"
                required={true}
              />
            </div>
            <div className="feedback-row message">
              <label htmlFor="your-message" className="label-feedback">
                Message
              </label>
              <textarea
                id="your-message"
                name="your-message"
                maxLength="700"
                cols="40"
                rows="10"
                className="form-input message-input"
                aria-invalid="false"
                placeholder="enter a message"></textarea>
            </div>
            <input
              type="submit"
              value="Отправить"
              className="feedback-btn l-feni-section"
              aria-invalid="false"></input>
            <div className="checkbox-row">
              <input
                className="feni-checkbox"
                type="checkbox"
                id="checkbox"
                name="checkbox"
                required={true}
              />
              <label className="feni-checkbox-agree" htmlFor="checkbox">
                Согласие на обработку персональных данных
              </label>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
}
