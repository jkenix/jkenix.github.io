import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const MotionComp = motion(Link);

export default function Unique_Order_Card(props) {
  return (
    <>
      <MotionComp
        to={props.card_link}
        className="l-unique-project"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}>
        <span className="price-project-title small-section">
          Индивидуальный
        </span>
        <h2 className="unique-title section-title">Уникальный проект?</h2>
        <p className="unique-desc section-desc">
          Мы в деле! Давайте обсудим условия подходящие, именно для вас!
        </p>
        <button className="btn-order btn-link btn-bw55 btn-focus">
          Заказать
        </button>
      </MotionComp>
    </>
  );
}
