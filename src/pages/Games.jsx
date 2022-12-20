import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import { ShowMenu, NavActive } from "../js/scripts";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Games() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Games</title>
          <meta property="og:title" content="Games Toy.Stream" />
          <meta property="og:url" content="https://jkenix.netlify.app/games" />
          <meta name="og:description" content="Games by Toy.Stream." />
          <meta name="description" content="Toy.Stream Games." />
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
          <Header glink="link-active" />
        </header>
        <main className="l-main">
          <div className="l-company-about">
            <p style={{ fontSize: "5.5rem" }}>Игры</p>
          </div>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}
