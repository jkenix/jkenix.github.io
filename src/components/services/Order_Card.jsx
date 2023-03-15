import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const MotionComp = motion(Link);

export default function Order_Card(props) {
  return (
    <>
      <MotionComp
        to={props.card_link}
        className="l-price-project"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}>
        <div className="price-project-info">
          <h3 className="price-project-title small-section">{props.title}</h3>
          <span className="price section-title">{props.price}</span>
        </div>
        <div className="btn-order btn-link btn-bw55 btn-focus">
          Заказать
        </div>
        <ul className="l-project-points-list">{props.points}</ul>
      </MotionComp>
    </>
  );
}
