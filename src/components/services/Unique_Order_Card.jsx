import React from "react"; // Подключение модулей React
import { motion } from "framer-motion"; // Подключение Библиотеки Framer-motion
// Компонент блока карточки заказа "Уникальный проект"
export default function Unique_Order_Card(props) {
  return (
    <>
      <motion.div
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
        <button className="btn-order btn-link btn-bw41 btn-focus" onClick={props.Click}>
          Заказать
        </button>
      </motion.div>
    </>
  );
}
