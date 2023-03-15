import React from "react";
import { motion } from "framer-motion";
import LazyLoad from "react-lazy-load";

import rocket from "../../img/rocket.webp";
import doggo from "../../img/doggo.webp";
import gift from "../../img/gift.webp";
import pig from "../../img/pig.webp";

export default function Benefits() {
  return (
    <>
      <section className="l-benefits l-feni-section l-fm">
        <motion.h2
          className="benefits-title section-title"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}>
          Преимущества работы с нами
        </motion.h2>
        <div className="l-benefits-items">
          <motion.div
            className="benefits-item"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}>
            <LazyLoad className="benefits-img" height={49} offset={200}>
              <img src={rocket} width="42" height="49" alt="rocket" />
            </LazyLoad>
            <p className="benefits-desc section-desc">
              Большой опыт (более 800+ успешных разработок)
            </p>
          </motion.div>
          <motion.div
            className="benefits-item"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}>
            <LazyLoad className="benefits-img" height={52} offset={200}>
              <img src={doggo} width="47" height="52" alt="doggo" />
            </LazyLoad>
            <p className="benefits-desc section-desc">
              Команда опытных и профессиональных дизайнеров
            </p>
          </motion.div>
          <motion.div
            className="benefits-item"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}>
            <LazyLoad className="benefits-img" height={43} offset={200}>
              <img src={gift} width="48" height="43" alt="gift" />
            </LazyLoad>
            <p className="benefits-desc section-desc">
              Бесплатные консультации по разработке дизайна
            </p>
          </motion.div>
          <motion.div
            className="benefits-item"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}>
            <LazyLoad className="benefits-img" height={54} offset={200}>
              <img src={pig} width="44" height="54" alt="rocket" />
            </LazyLoad>
            <p className="benefits-desc section-desc">
              Комплексный подход к экономии
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
