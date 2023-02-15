import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { da, TabList_portfolio } from "../js/data.jsx";

export default function Portfolio() {
  const [currentTab, setCurrentTab] = useState("tab1");
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Feni - Портфолио</title>
          <meta property="og:title" content="Feni Design Портфолио" />
          <meta
            property="og:url"
            content="https://jkenix.github.io/portfolio"
          />
          <meta
            name="og:description"
            content="Посмотрите портфолио Feni Design Studio."
          />
          <meta name="description" content="Feni Design портфолио" />
        </Helmet>
        <main className="l-main">
          <h2 className="section-title">Наши работы</h2>
          <div className="fp-works-tabs">
            <Link to="logo">dadad</Link>
            {/* {TabList_portfolio.map((tab, i) => (
              <button
                key={i}
                onClick={() => setCurrentTab(tab.name)}
                className={
                  tab.name === currentTab ? "btn-tab active" : "btn-tab"
                }>
                {tab.label}
                <span className="btn-tab-num">{tab.num}</span>
              </button>
            ))} */}
          </div>
          {/* {TabList_portfolio.map((tab, i) => {
            if (tab.name === currentTab) {
              return (
                <div className="fp-section-content" key={i}>
                  {tab.content}
                </div>
              );
            } else {
              return null;
            }
          })} */}
        </main>
      </HelmetProvider>
    </>
  );
}
