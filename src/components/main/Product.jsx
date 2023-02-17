import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Product(props) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Feni - {`${props.tablabel}`}</title>
        <meta property="og:title" content={`${props.title}`} />
        <meta property="og:url" content="URL/" />
        <meta name="og:description" content={`${props.desc}`} />
        <meta
          name="description"
          content={`Feni Design портфолио-${props.title}`}
        />
      </Helmet>
      <main className="l-main">
        <div>
          {/* Добавить alt,  */}
          <img src={props.src} width="400" height="250" alt="" />
          <span>{props.desc}</span>
        </div>
      </main>
    </HelmetProvider>
  );
}
