import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function News() {
  return (
    <>
      <Helmet>
        <title>Toy.Stream News</title>
        {/* <meta
          property="og:description"
          content="Toy.Steam - About company."
        />
        <meta property="og:url" content="https://jkenix.netlify.app/company" /> */}

        <meta name="description" content="Toy.Stream News." />
      </Helmet>
      <Header />
      <main className="l-main">
        <div className="l-company-about">
          <p style={{ fontSize: "5.5rem" }}>Новости</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
