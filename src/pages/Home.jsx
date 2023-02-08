import { React } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import Header from "../components/Header.jsx";
// import Sociallinksvert from "../components/Sociallinksvert.jsx";
import Footer from "../components/Footer.jsx";

// import unicorn from "../img/unicorn.svg";

export default function Home(props) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Feni Design</title>
          <meta property="description" content="Feni design studio" />
          <meta property="og:title" content="Toy.Stream - Game studio" />
          <meta property="og:url" content="https://jkenix.github.io/" />
          <meta
            name="og:description"
            content="Toy.Steam - Page made by jkenix from layout."
          />
          <meta
            name="description"
            content="Page made by jkenix from layout Toy.Steam."
          />
        </Helmet>
        <Header/>
        <main className="l-main"></main>
        <Footer />
      </HelmetProvider>
    </>
  );
}
