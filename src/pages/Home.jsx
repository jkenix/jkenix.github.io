import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Toy.Stream</title>
          <meta property="og:title" content="Toy.Stream - Game studio" />
          <meta property="og:url" content="https://jkenix.netlify.app/" />
          <meta
            name="og:description"
            content="Toy.Steam - Page made by jkenix from layout."
          />
          <meta
            name="description"
            content="Page made by jkenix from layout Toy.Steam."
          />
        </Helmet>
        <Header />
        <main className="l-main">
          <div className="l-games-about">
            <p style={{ fontSize: "5.5rem" }}>Work in progress!</p>
            <div>
              <h1>
                <b></b>
              </h1>
            </div>
          </div>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}
