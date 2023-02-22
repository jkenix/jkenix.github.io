import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { TabList_portfolio } from "../js/data.jsx";
import UpBtn from "../components/UpBtn.jsx";

export default function Portfolio(props) {
  const [currentTab, setCurrentTab] = useState(props.tabid);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Feni - {props.tablabel}</title>
          <meta property="og:title" content="Feni Design Портфолио" />
          <meta
            property="og:url"
            content={"https://jkenix.github.io/portfolio" + props.tabpath}
          />
          <meta
            name="og:description"
            content={`Посмотрите ${props.tablabel} Feni Design Studio.`}
          />
          <meta
            name="description"
            content={`Feni Design портфолио - ${props.tablabel}`}
          />
        </Helmet>
        <main className="l-main">
          <section className="l-portfolio">
            <div className="l-port-section-title">
              <h2 className="section-title">Наши работы</h2>
              <div className="port-works-tabs works-tabs">
                {TabList_portfolio.slice(0).map((tab, i) => (
                  <NavLink
                    to={"/portfolio" + tab.path}
                    key={i}
                    onClick={() => setCurrentTab(tab.name)}
                    className={"btn-tab"}>
                    {tab.label}
                    <span className="btn-tab-num">{tab.num}</span>
                  </NavLink>
                ))}
              </div>
            </div>
            {TabList_portfolio.map((tab, i) => {
              if (tab.name === currentTab) {
                return (
                  <React.Fragment key={i}>
                    <div className="port-section-content works-content" key={i}>
                      {tab.content}
                    </div>
                    <UpBtn height="41px" mtop="50px" />
                  </React.Fragment>
                );
              } else {
                return null;
              }
            })}
          </section>
        </main>
      </HelmetProvider>
    </>
  );
}
