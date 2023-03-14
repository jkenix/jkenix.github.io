import React from "react";
import { motion } from "framer-motion";

export default function Service_Preview(props) {
  return (
    <>
      <motion.section
        className="l-service-preview l-feni-start l-feni-section l-fm"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        <div className="l-fs-content l-lfp">
          <h1 className="fs-title section-main-title">{props.title}</h1>
          <p className="fs-desc section-desc">
           {props.desc}
          </p>
          <div className="l-service-info">
            <a href={props.brif_link} className="btn-link btn-b55">
              Заполнить бриф
            </a>
            <button
              className="btn-link btn-bw55"
              onClick={() => {
                document.getElementById("prices").scrollIntoView();
              }}>
              Цены
            </button>
          </div>
        </div>
        <div className="l-fs-img wd-img img__resp-block">
          {props.img_content}
        </div>
      </motion.section>
    </>
  );
}
