import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
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
        <Header hname="l-header lg-bg" mlink="link-active" />
        <div className="l-main lg-bg">
          <div className="l-ga-wr">
            <div className="l-games-about">
              <div className="title">
                <h2>Мы создаем мобильные игры, в которые ты играешь</h2>
              </div>
              <div className="desc">
                <div className="social-links">
                  <Link to="/">
                    <img
                      src="../img/pinterest.svg"
                      width={"32"}
                      height={"32"}
                      alt="pinterest"
                      title="pinterest"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src="../img/Behance.svg"
                      width={"32"}
                      height={"32"}
                      alt="Behance"
                      title="Behance"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src="../img/Dribbble.svg"
                      width={"32"}
                      height={"32"}
                      alt="Dribbble"
                      title="Dribbble"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src="../img/Snapchat.svg"
                      width={"32"}
                      height={"32"}
                      alt="Snapchat"
                      title="Snapchat"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src="../img/Linkedin.svg"
                      width={"32"}
                      height={"32"}
                      alt="Linkedin"
                      title="Linkedin"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src="../img/Facebook.svg"
                      width={"32"}
                      height={"32"}
                      alt="Facebook"
                      title="Facebook"
                    ></img>
                  </Link>
                </div>
                <div className="desc-content">
                  <Link className="check-box">Узнать подробнее</Link>
                  <div className="text-box">
                    <p>
                      «Оригинальные идеи, качество реализации игровых механик и
                      внимание к деталям интерфейса - наши основные принципы.»
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pic-block img__resp-block">
              <img
                src="../img/unicorn.svg"
                className="img__resp"
                width="768"
                height="733"
                alt="Unicorn picture"
              ></img>
            </div>
          </div>
        </div>
        <Footer />
      </HelmetProvider>
    </>
  );
}
