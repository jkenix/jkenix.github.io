import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, NavLink, useLocation, Outlet } from "react-router-dom";
import { TabList_portfolio} from "../js/data.jsx";

export default function Portfolio(props) {
  const state = () => {
    const location = useLocation();
  };
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
          <div className="fp-works-tabs works-tabs">
            {TabList_portfolio.slice(0).map((tab, i) => (
              <NavLink
                to={"/portfolio" + tab.path}
                key={i}
                onClick={() => setCurrentTab(tab.name)}
                className={
                   "btn-tab"
                }>
                {tab.label}
                <span className="btn-tab-num">{tab.num}</span>
              </NavLink>
            ))}
          </div>
          {TabList_portfolio.map((tab, i) => {
            if (tab.name === currentTab ) {
              return (
                <div className="fp-section-content works-content" key={i}>
                  {tab.content}
                </div>
              );
            } else {
              return null;
            }
          })}
        </main>
      </HelmetProvider>
    </>
  );
}
