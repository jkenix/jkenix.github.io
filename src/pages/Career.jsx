import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import { ShowMenu, ShowMenubclg, NavActive } from "../js/scripts";
import Header from "../components/Header.jsx";
import Sociallinksvert from "../components/Sociallinksvert.jsx";
import Footer from "../components/Footer.jsx";

import lamp from "../img/lamp.svg";

export default function Career() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Career</title>
          <meta property="og:title" content="Career in Toy.Stream" />
          <meta property="og:url" content="https://jkenix.netlify.app/career" />
          <meta name="og:description" content="Post a job now!" />
          <meta name="description" content="Career in Toy.Stream." />
        </Helmet>
        <header className="l-header bclg-bg">
          <div
            className="hamburger"
            onClick={() => {
              ShowMenu();
              ShowMenubclg();
              NavActive();
            }}
          >
            <span className="hamburger-item"></span>
          </div>
          <Header carlink="link-active la-c" />
        </header>
        <main className="l-main">
          <Sociallinksvert slvname="social-links-vert slv-static" />
          <div className="l-car-a-wr bclg-bg">
            <div className="l-career-about">
              <div className="ca-title">
                <h2>Карьера в Toy.Stream</h2>
                <div className="ca-text-desc">
                  <p>
                    Мы всегда рады новым высококлассным специалистам геймдева,
                    желающим присоединиться к нашей команде.
                  </p>
                </div>
                <a
                  className="btn check-vacancy"
                  href="#vacancy"
                  title="Check vacancy"
                >
                  Вакансия
                </a>
              </div>
              <div className="ca-pic-block img__resp-block" aria-hidden="true">
                <img
                  src={lamp}
                  className="img__resp"
                  width="327"
                  height="560"
                  alt="Career preview picture"
                ></img>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}
