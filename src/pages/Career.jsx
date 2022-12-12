import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Career() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Career</title>
          <meta property="og:title" content="Career in Toy.Stream" />
          <meta property="og:url" content="https://jkenix.netlify.app/career" />
          <meta name="og:description" content="Post a job now!" />
          <meta name="description" content="Career in Toy.Stream." />
        </Helmet>
        <Header carlink="link-active"/>
        <main className="l-main">
          <div className="l-company-about">
            <p style={{ fontSize: "5.5rem" }}>Карьера</p>
          </div>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}
