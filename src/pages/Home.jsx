import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Toy.Stream</title>
        <meta
          name="description"
          content="Toy.Steam - Page made by jkenix from layout."
        />
        <meta
          property="og:description"
          content="Toy.Steam - Page made by jkenix from layout."
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
    </>
  );
}
