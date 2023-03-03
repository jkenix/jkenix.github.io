import React from "react";
import LazyLoad from "react-lazy-load";
import { motion } from "framer-motion";

import { useForm } from "@formspree/react";
import mail_form from "../img/mail-form.webp";
import mail_send from "../img/emailsend.webp";

export default function Discuss() {
  const [state, handleSubmit] = useForm("mgebyljo");
  if (state.succeeded) {
    return (
      <>
        <div className="l-feni-discuss-answer l-feni-section l-fm">
          <div className="fda-img img__resp-block">
            <img src={mail_send} width="434" height="210" alt="Mail send" />
          </div>
          <p className="fda-desc section-desc">Заявка успешно отправлена!</p>
          <p className="fda-desc section-desc">
            Мы ответим вам в ближайшее время!
          </p>
        </div>
      </>
    );
  }
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
            onSubmit={handleSubmit}
            className="fdp-content-form"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}>
            <div className="feedback-row top">
              <label className="label-feedback" htmlFor="Client name">
                Ваше имя*
              </label>
              <input
                type="text"
                id="Client name"
                name="Client name"
                size="40"
                className="form-input"
                aria-required="true"
                aria-invalid="false"
                placeholder="введите ваше имя"
                required={true}
              />
            </div>
            <div className="feedback-row right">
              <label className="label-feedback" htmlFor="Client phone">
                Телефон*
              </label>
              <input
                type="tel"
                id="Client phone"
                name="Client phone"
                size="40"
                className="form-input"
                aria-required="true"
                aria-invalid="false"
                placeholder="введите номер телефона"
                required={true}
              />
            </div>
            <div className="feedback-row left">
              <label className="label-feedback" htmlFor="Client email">
                Email*
              </label>
              <input
                type="email"
                id="Client email"
                name="Client email"
                size="30"
                className="form-input"
                aria-required="true"
                aria-invalid="false"
                placeholder="введите электронный адрес"
                required={true}
              />
            </div>
            <div className="feedback-row message">
              <label htmlFor="Client message" className="label-feedback">
                Message
              </label>
              <textarea
                id="Client message"
                name="Client message"
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
              disabled={state.submitting}
              className="feedback-btn l-feni-section"
              aria-invalid="false"></input>
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
