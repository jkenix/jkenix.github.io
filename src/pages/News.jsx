import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import { ShowMenu, NavActive } from "../js/scripts";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function News() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>News</title>
          <meta property="og:title" content="News Toy.Stream" />
          <meta property="og:url" content="https://jkenix.netlify.app/news" />
          <meta
            name="og:description"
            content="Check news from Toy.Stream team."
          />
          <meta name="description" content="Toy.Stream News." />
        </Helmet>
        <header className="l-header">
          <div
            className="hamburger"
            onClick={() => {
              ShowMenu();
              NavActive();
            }}
          >
            <span className="hamburger-item"></span>
          </div>
          <Header nlink="link-active la-c" />
        </header>
        <main className="l-main">
          <div className="l-company-about">
            <p style={{ fontSize: "5.5rem" }}>Новости</p>
          </div>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}
