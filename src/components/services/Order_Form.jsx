import React from "react";
import { motion } from "framer-motion";

export default function Order_Form(props) {
  return (
    <>
      <motion.form
        action="https://formspree.io/f/mqkobyen"
        method="POST"
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
            placeholder="enter a message"></textarea>
        </div>
        <input
          type="hidden"
          id="Test"
          name="Test"
          size="40"
          className="form-input"
          aria-required="true"
          value={props.count}
          required={true}
        />
        <input
          type="submit"
          value="Отправить"
          className="feedback-btn l-feni-section"></input>
        <div className="checkbox-row">
          <p className="feni-checkbox-agree">
            Отправляя форму вы даёте согласие на обработку персональных данных
          </p>
        </div>
      </motion.form>
    </>
  );
}
