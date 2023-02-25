import React from "react";
import LazyLoad from "react-lazy-load";

import mail_form from "../img/mail-form.webp";

export default function Discuss() {
  return (
    <>
        <div className="l-fdp-content l-feni-section l-fm">
          <div className="fdp-content-info">
            <h2 className="fdp-title section-title">Обсудить проект</h2>
            <p className="fdp-desc section-desc">
              Крутые проекты начинаются с заполнения этой формы
            </p>
            <LazyLoad height={342} offset={200} className="rel form-img-block">
              <img
                src={mail_form}
                className="form-img"
                alt="Mail form"
                width={533}
              />
            </LazyLoad>
          </div>
          <form className="fdp-content-form">
            <div className="feedback-row top">
              <label className="label-feedback" htmlFor="your-name">
                Ваше имя*
              </label>
              <input
                type="text"
                id="your-name"
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
                name="checkbox"
                required={true}
              />
              <span className="feni-checkbox-agree">Согласие на обработку персональных данных</span>
            </div>
          </form>
        </div>
    </>
  );
}
