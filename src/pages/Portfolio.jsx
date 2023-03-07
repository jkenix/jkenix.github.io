import React, { lazy, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { TabList_portfolio } from "../js/data.jsx";

import UpBtn from "../components/UpBtn.jsx";
import ScrollToTop from "../components/main/ScrollToTop.jsx";
const Discuss = lazy(() => import("../components/main/Discuss.jsx"));

export default function Portfolio(props) {
  const [currentTab, setCurrentTab] = useState(props.tabid);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Feni - {props.tablabel}</title>
          <meta
            property="og:title"
            content={`Feni Design - ${props.tablabel}`}
          />
          {/* <meta
            property="og:url"
            content={"https://jkenix.github.io/portfolio" + props.tabpath}
          /> */}
          {/* <meta
            name="og:description"
            content={`Посмотрите пример работ по теме "${props.tablabel}" от Feni Design Studio.`}
          /> */}
          <meta
            name="description"
            content={`Feni Design портфолио - ${props.tablabel}`}
          />
        </Helmet>
        <main className="l-main">
          <section className="l-portfolio">
            <motion.div
              className="l-port-section-title"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
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
            </motion.div>
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
          <Discuss />
        </main>
        <ScrollToTop />
      </HelmetProvider>
    </>
  );
}
