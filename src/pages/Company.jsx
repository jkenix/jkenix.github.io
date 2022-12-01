import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { hydrateRoot } from "react-dom/client";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Company() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Toy.Stream - Game studio</title>
          <meta property="og:title" content="Company Toy.Stream" />
          <meta
            property="og:url"
            content="https://jkenix.netlify.app/company"
          />
          <meta name="og:description" content="About company Toy.Stream." />
          <meta name="description" content="Toy.Steam - About company." />
        </Helmet>
        <Header />
        <main className="l-main">
          <div className="l-company-about">
            <p style={{ fontSize: "5.5rem" }}>О компании</p>
          </div>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}