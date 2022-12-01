import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Contacts() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contacts</title>
          <meta property="og:title" content="Toy.Stream Contacts" />
          <meta
            property="og:url"
            content="https://jkenix.netlify.app/contacts"
          />
          <meta name="og:description" content="Contacts - Toy.Stream." />
          <meta name="description" content="Toy.Stream - Contacts." />
        </Helmet>
        <Header />
        <main className="l-main">
          <div className="l-company-about">
            <p style={{ fontSize: "5.5rem" }}>Контакты</p>
          </div>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}
