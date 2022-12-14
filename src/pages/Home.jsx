import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import pinterest from "../img/pinterest.svg";
import Behance from "../img/Behance.svg";
import Dribbble from "../img/Dribbble.svg";
import Snapchat from "../img/Snapchat.svg";
import Linkedin from "../img/Linkedin.svg";
import Facebook from "../img/Facebook.svg";
import unicorn from "../img/unicorn.svg";

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
        <Header mlink="link-active" />
        <div className="l-main ylg-bg">
          <div className="l-ga-wr">
            <div className="l-games-about">
              <div className="title">
                <h2>Мы создаем мобильные игры, в которые ты играешь</h2>
              </div>
              <div className="desc">
                <div className="social-links-vert">
                  <Link to="/">
                    <img
                      src={pinterest}
                      width={"32"}
                      height={"32"}
                      alt="pinterest"
                      title="pinterest"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src={Behance}
                      width={"32"}
                      height={"32"}
                      alt="Behance"
                      title="Behance"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src={Dribbble}
                      width={"32"}
                      height={"32"}
                      alt="Dribbble"
                      title="Dribbble"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src={Snapchat}
                      width={"32"}
                      height={"32"}
                      alt="Snapchat"
                      title="Snapchat"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src={Linkedin}
                      width={"32"}
                      height={"32"}
                      alt="Linkedin"
                      title="Linkedin"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src={Facebook}
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
                src={unicorn}
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
