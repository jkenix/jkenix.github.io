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
        <div
          className="project-img"
          style={{ backgroundImage: `url("${props.src}")` }}></div>
        <div className="project-content">
          <h2 className="section-title">{props.title}</h2>
          <p>{props.desc}</p>
        </div>
      </main>
    </HelmetProvider>
  );
}
