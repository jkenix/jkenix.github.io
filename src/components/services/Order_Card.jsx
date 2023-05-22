import React from "react"; // Подключение модулей React
import { motion } from "framer-motion"; // Подключение Библиотеки Framer-motion
// Компонент блока карточки заказа
export default function Order_Card(props) {
  return (
    <>
      <motion.div
        className="l-price-project"
        id="l-price-project"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}>
        <div className="price-project-info">
          <h3 className="price-project-title small-section">{props.title}</h3>
          <span className="price section-title">{props.price}</span>
        </div>
        <button
          className="btn-order btn-link btn-bw41 btn-focus"
          onClick={props.Click}>
          Заказать
        </button>
        <ul className="l-project-points-list">{props.points}</ul>
      </motion.div>
    </>
  );
}
