import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Company() {
  return (
    <>
      <Helmet>
        <title>About Toy.Stream</title>
        <meta property="og:description" content="Toy.Steam - About company." />
        <meta property="og:url" content="https://jkenix.netlify.app/company" />

        <meta name="description" content="About company Toy.Stream." />
      </Helmet>
      <Header />
      <main className="l-main">
        <div className="l-company-about">
          <p style={{ fontSize: "5.5rem" }}>О компании</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
