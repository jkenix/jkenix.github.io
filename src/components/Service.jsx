import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const MotionComp = motion(Link);

export default function Service(props) {
  return (
    <>
      <MotionComp
        to={props.link}
        className="l-feni-service"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}>
        <h2 className="feni-service-title section-title">{props.title}</h2>
        <p className="feni-service-desc section-desc">{props.desc}</p>
        <div className="feni-check">
          <span>Подробнее</span>
          <svg
            width="24px"
            height="19px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 12L4 12"
              stroke="#323232"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 18L19.9375 12.0625V12.0625C19.972 12.028 19.972 11.972 19.9375 11.9375V11.9375L14 6"
              stroke="#323232"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </MotionComp>
    </>
  );
}
