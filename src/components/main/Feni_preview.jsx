import React, { useState } from "react";
import { Link } from "react-router-dom";

import more from "../../img/more.svg";

export default function Feni_preview() {
  const [currentTab, setCurrentTab] = useState("tab1");
  const TabList = [
    {
      name: "tab1",
      label: "Логотипы",
      num: 10,
      content: (
        <div className="tab-content">
          <h2>Tab content 1</h2>
          <p>Here is your tab content. You can separate this as a component.</p>
          <p>Lorem ipsum dolor sit amet ...</p>
        </div>
      ),
    },
    {
      name: "tab2",
      label: "Веб-сайты",
      num: 3,
      content: (
        <div className="tab-content">
          <h2>Tab content 2</h2>
          <p>Here is your tab content. You can separate this as a component.</p>
          <p>Lorem ipsum dolor sit amet ...</p>
        </div>
      ),
    },
    {
      name: "tab3",
      label: "Фирменный стиль",
      num: 8,
      content: (
        <div className="tab-content">
          <h2>Tab content 3</h2>
          <p>Here is your tab content. You can separate this as a component.</p>
          <p>Lorem ipsum dolor sit amet ...</p>
        </div>
      ),
    },
    {
      name: "tab4",
      label: "Иллюстрации",
      num: 4,
      content: (
        <div className="tab-content">
          <h2>Tab content 4</h2>
          <p>Here is your tab content. You can separate this as a component.</p>
          <p>Lorem ipsum dolor sit amet ...</p>
        </div>
      ),
    },
  ];
  return (
    <>
      <section className="l-feni-preview">
        <section className="feni-preview-section">
          <h2 className="section-title">Наши работы</h2>
          <div className="work-tabs">
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

          {TabList.map((tab, i) => {
            if (tab.name === currentTab) {
              return (
                <div className="tab-content" key={i}>
                  {tab.content}
                </div>
              );
            } else {
              return null;
            }
          })}
        </section>
      </section>
    </>
  );
}
