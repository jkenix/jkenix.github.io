import React from "react";
import { motion } from "framer-motion";

export default function Service_Preview(props) {
  return (
    <>
      <motion.section
        className={props.section_class}
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        <div className="l-fs-content l-lfp">
          {props.title_content}
          <div className="l-service-info">
            <a href={props.brif_link} className="btn-link btn-b55">
              Заполнить бриф
            </a>
            <button
              className="btn-link btn-bw55"
              onClick={() => {
                // document.getElementById("prices").scrollIntoView();
              }}>
              Цены
            </button>
          </div>
        </div>
        {props.img_block}
      </motion.section>
    </>
  );
}
