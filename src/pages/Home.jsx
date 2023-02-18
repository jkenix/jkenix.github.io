import { React, useState } from "react";
import { Link } from "react-router-dom";

import { TabList_main } from "../js/data.jsx";
import more from "../img/more.svg";

export default function Home(props) {
  const [currentTab, setCurrentTab] = useState("tab2");
  return (
    <>
      <main className="l-main">
        <section className="l-feni-preview">
          <div className="l-fp-section-title">
            <h2 className="section-title">Наши работы</h2>
            <div className="fp-works-tabs works-tabs">
              {TabList_main.slice(1).map((tab, i) => (
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
              <Link className="btn-tab-link" to={"/portfolio/all_works"}>
                Все работы
                <img src={more} width={"25"} height={"8"} alt="more arrow" />
              </Link>
            </div>
          </div>
          {TabList_main.map((tab, i) => {
            if (tab.name === currentTab) {
              return (
                <div className="l-fp-section-content works-content" key={i}>
                  {tab.content}
                </div>
              );
            } else {
              return null;
            }
          })}
        </section>
      </main>
    </>
  );
}
