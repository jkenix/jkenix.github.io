import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Company() {
  return (
    <>
      <Header />
      <main className="l-main">
        <div className="l-company-about">
          <p style={{ fontSize: "5.5rem" }}>О компании</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
