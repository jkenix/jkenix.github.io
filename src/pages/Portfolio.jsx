import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Routes, Route, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import NotFound from "./NotFound.jsx";

export default function Portfolio() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Feni - Портфолио</title>
          <meta property="og:title" content="Feni Design Портфолио" />
          <meta
            property="og:url"
            content="https://jkenix.github.io/portfolio"
          />
          <meta
            name="og:description"
            content="Посмотрите портфолио Feni Design Studio."
          />
          <meta name="description" content="Feni Design портфолио" />
        </Helmet>  
        <main className="l-main">
          Порт <Link to={"dadad"}>DA</Link>
          <Outlet></Outlet>
        </main>
        <Routes>
          {/* <Route path="dadad" element={<NotFound />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* <Route path=":id/" element={<NotFound />} /> */}
          {/* <Route path="" element={<NotFound />} /> */}
        </Routes>
      </HelmetProvider>
    </>
  );
}
