import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Services() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Услуги и цены - Feni</title>
          <meta
            property="og:title"
            content="Услуги и цены Feni Design Studio"
          />
          <meta property="og:url" content="https://jkenix.github.io/company" />
          <meta name="og:description" content="Услуги и цены Feni Design, " />
          <meta name="description" content="Закажи услугу у Feni Design" />
        </Helmet>
        <main className="l-main">
        <div className="l-feni-section l-fm">
            В процессе...
          </div>
        </main>
      </HelmetProvider>
    </>
  );
}
