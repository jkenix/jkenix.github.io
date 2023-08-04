import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { ShowMenu, NavActive } from "../js/scripts";
import Header from "../components/Header.jsx";
import Sociallinksvert from "../components/Sociallinksvert.jsx";
import Footer from "../components/Footer.jsx";

export default function Contacts() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contacts</title>
          <meta property="og:title" content="Toy.Stream Contacts" />
          <meta property="og:url" content={`${location.href}`} />
          <meta name="og:description" content="Contacts - Toy.Stream." />
          <meta name="description" content="Toy.Stream - Contacts." />
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
          <Header conlink="link-active la-c" />
        </header>
        <main className="l-main">
          <Sociallinksvert slvname="social-links-vert slv-abs slv-con" />
          <div className="l-con-wr">
            <div className="l-contacts-content">
              <div className="contacts-info">
                <h2>Контакты</h2>
                <div className="ci-content">
                  <a className="c-number" href="tel:+79266888569">
                    +7 (926) 688 85 69
                  </a>
                  <a className="c-mail" href="mailto:support@toy.stream">
                    support@toy.stream
                  </a>
                  <span>Technopark Skolkovo, Moscow, 121205</span>
                </div>
              </div>
              <iframe
                className="contact_map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4497.748959245838!2d37.343012334887696!3d55.69116999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b551d8051a7bb9%3A0x17d1f1eed0377fb9!2z0KLQtdGF0L3QvtC_0LDRgNC6INCh0LrQvtC70LrQvtCy0L4!5e0!3m2!1sru!2sua!4v1622563065447!5m2!1sru!2sua"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}
