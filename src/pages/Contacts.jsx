import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Contacts() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Контакты - Feni</title>
          <meta property="og:title" content="Контакты - Feni Design" />
          <meta property="og:url" content="https://jkenix.github.io/contacts" />
          {/* <meta name="og:description" content="" />
          <meta name="description" content="" /> */}
        </Helmet>
        <main className="l-main">
        <div className="l-feni-section l-fm">
            В процессе...
          </div> 
        </main>
      </HelmetProvider>
    </>
  );
}
