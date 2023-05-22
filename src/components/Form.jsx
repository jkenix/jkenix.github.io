import React from "react"; // Подключение модулей React
import { motion } from "framer-motion"; // Подключение Библиотеки Framer-motion
// Компонент блока формы
export default function Form(props) {
  return (
    <>
      <motion.form
        action={props.form_link_service}
        method="POST"
        className={props.class}
        initial={props.initial}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}>
        {props.title}
        <div className="l-feedback-row top">
          <div className="l-client-info">
            <label className="label-feedback" htmlFor="Client-name">
              Ваше имя
            </label>
            <label
              className="label-feedback label-required"
              htmlFor="Client-name">
              *
            </label>
          </div>
          <input
            type="text"
            id="Client-name"
            name="Client-name"
            maxLength="255"
            className="form-input"
            aria-required="true"
            placeholder="Введите имя"
            required={true}
          />
        </div>
        <div className="l-feedback-row right">
          <div className="l-client-info">
            <label className="label-feedback" htmlFor="Client-phone">
              Телефон
            </label>
            <label
              className="label-feedback label-required"
              htmlFor="Client-name">
              *
            </label>
          </div>
          <input
            type="tel"
            id="Client-phone"
            name="Client-phone"
            maxLength="50"
            minLength="6"
            className="form-input"
            aria-required="true"
            placeholder="Введите номер телефона"
            required={true}
          />
        </div>
        <div className="l-feedback-row left">
          <div className="l-client-info">
            <label className="label-feedback" htmlFor="Client-email">
              Почта
            </label>
            <label
              className="label-feedback label-required"
              htmlFor="Client-name">
              *
            </label>
          </div>
          <input
            type="email"
            id="Client-email"
            name="Client-email"
            maxLength="255"
            minLength="3"
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
            rows={props.textarea_rows}
            className="form-input message-input"
            placeholder="Введите ваше сообщение"></textarea>
        </div>
        {props.value}
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
Form.defaultProps = { textarea_rows: "10" };
