import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function News() {
  return (
    <>
      <Helmet>
        <title>News</title>
        <meta property="og:title" content="News Toy.Stream" />
        <meta property="og:url" content="https://jkenix.netlify.app/news" />
        <meta name="og:description" content="Check news from Toy.Stream team." />
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
