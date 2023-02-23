import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function About() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>О нас - Feni</title>
          <meta property="og:title" content="Feni Design - о нас" />
          <meta property="og:url" content="https://jkenix.github.io/about" />
          {/* <meta name="og:description" content="" /> */}
          {/* <meta name="description" content="" /> */}
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
