import React, { useState } from "react";
import { Link } from "react-router-dom";

import more from "../../img/more.svg";
import { TabList  } from "../../js/data.jsx";

export default function Feni_preview() {
  const [currentTab, setCurrentTab] = useState("tab1");
  return (
    <>
      <section className="l-feni-preview">
        <div className="fp-section-title">
          <h2 className="section-title">Наши работы</h2>
          <div className="fp-works-tabs">
            {TabList.map((tab, i) => (
              <button
                key={i}
                onClick={() => setCurrentTab(tab.name)}
                className={
                  tab.name === currentTab ? "btn-tab active" : "btn-tab"
                }>
                {tab.label}
                <span className="btn-tab-num">{tab.num}</span>
              </button>
            ))}
            <Link className="btn-tab-link" to={"/portfolio"}>
              Все работы{" "}
              <img src={more} width={"25"} height={"8"} alt="more arrow" />
            </Link>
          </div>
        </div>
        {TabList.map((tab, i) => {
          if ((tab.name === currentTab)) {
            return (
              <div className="fp-section-content" key={i}>
                {tab.content}
              </div>
            );
          } else {
            return null;
          }
        })}
      </section>
    </>
  );
}
