import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/feni-logo.svg";

export default function Footer() {
  return (
    <footer className="l-footer">
      <div className="l-footer-content">
        <div className="fc-first">
          <div className="footer-logo">
            <img
              src={logo}
              alt="Feni logo"
              width="65"
              height="65"
              loading="eager"
            />
          </div>
        </div>
        <div className="fc-links">
          <h3 className="footer-links-title small-section">Briefings</h3>
          <div className="footer-links">
            <Link to="/" className="footer-link">
              Бриф на разработку веб дизайна
            </Link>
            <Link to="/" className="footer-link">
              Бриф на разработку стиля
            </Link>
            <Link to="/" className="footer-link">
              Бриф на разработку презентации
            </Link>
            <Link to="/" className="footer-link">
              Бриф на разработку логотипа
            </Link>
            <Link to="/" className="footer-link">
              Бриф на разработку креатива
            </Link>
          </div>
        </div>
        <div className="fc-links">
          <h3 className="footer-links-title small-section">О нас</h3>
          <div className="footer-links">
            <Link to="/portfolio" className="footer-link">
              Портфолио
            </Link>
            <Link to="/services" className="footer-link">
              Услуги и цены
            </Link>
            <Link to="/about" className="footer-link">
              Мы
            </Link>
            <Link to="/contacts" className="footer-link">
              Контакты
            </Link>
          </div>
        </div>
        <div className="fc-links">
          <h3 className="footer-links-title small-section">Контакты</h3>
          <div className="footer-links">
            <a href="mailto:hello@whalesagency.com" className="footer-link">
              hello@whalesagency.com
            </a>
            <a href="tel:+7-963-728-66-90" className="footer-link">
              +79637286690
            </a>
          </div>
        </div>
      </div>
      <div className="l-footer-bottom">
        <span className="footer-copyright">Copyright © 2023 Feni Design.</span>
        <Link to="/" className="footer-link" title="Публичная Оферта">
          Публичная Оферта
        </Link>
        <a
          href="https://github.com/jkenix"
          className="footer-link"
          title="Github Profile">
          Creator Github Profile
        </a>
      </div>
      <div
        className="l-footer-bottom"
        style={{
          justifyContent: "center",
          marginTop: "30px",
          textAlign: "center",
        }}>
        <span
          style={{
            textTransform: "uppercase",
            fontSize: "1.5rem",
            whiteSpace: "normal",
            lineHeight: "35px",
          }}>
          Web-site just for study!
        </span>
      </div>
    </footer>
  );
}
