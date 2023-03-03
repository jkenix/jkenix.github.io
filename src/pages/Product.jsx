import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop.jsx";

import more from "../img/more.svg";

export default function Product(props) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Feni - {`${props.title}`}</title>
        <meta property="og:title" content={`${props.title}`} />
        {/* <meta property="og:url" content="URL/" /> */}
        <meta name="og:description" content={`${props.desc}`} />
        <meta
          name="description"
          content={`Feni Design портфолио - ${props.title}`}
        />
      </Helmet>
      <main className="l-main-project">
        <div className="project-img img__rubber l-feni-section">
          <img src={props.src} alt={props.title} loading="eager" />
        </div>
        <div className="project-content l-feni-section">
          <h2 className="project-title section-title">{props.title}</h2>
          <p className="project-desc section-desc">{props.desc}</p>
          <div className="project-client">
            <span className="pc-title small-section">Клиент:</span>
            <span className="pc-info small-section">{props.client}</span>
          </div>
          <Link
            href="/"
            className="btn-project btn-tab-link"
            title="Перейти на сайт проекта">
            Перейти на сайт{" "}
            <img src={more} width={"25"} height={"8"} alt="more arrow" />
          </Link>
        </div>
      </main>
      <ScrollToTop />
    </HelmetProvider>
  );
}
