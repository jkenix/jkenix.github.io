import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Product(props) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Feni - {`${props.tablabel}`}</title>
        <meta property="og:title" content={`${props.title}`} />
        {/* <meta property="og:url" content="URL/" /> */}
        <meta name="og:description" content={`${props.desc}`} />
        <meta
          name="description"
          content={`Feni Design портфолио-${props.title}`}
        />
      </Helmet>
      <main className="l-main-project">
        <div className="project-img img__rubber l-feni-section">
          <img src={props.src} alt={props.title} loading="eager"/>
        </div>
        <div className="project-content l-feni-section">
          <h2 className="section-title">{props.title}</h2>
          <p className="project-desc">{props.desc}</p>
        </div>
      </main>
    </HelmetProvider>
  );
}
