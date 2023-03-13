import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/main/Header.jsx";
import { all_works } from "./js/data.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Product = lazy(() => import("./pages/Product.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contacts = lazy(() => import("./pages/Contacts.jsx"));
const Footer = lazy(() => import("./components/main/Footer.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

const Logos = lazy(() => import("./pages/nested/Logos.jsx"));
const Web_design = lazy(() => import("./pages/nested/Web_design.jsx"));
const Identify = lazy(() => import("./pages/nested/Identify.jsx"));
const Illustrations = lazy(() => import("./pages/nested/Illustrations.jsx"));
const Presentations = lazy(() => import("./pages/nested/Presentations.jsx"));

export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="l-preloader">
              Загрузка...
              <div className="preloader-content"></div>
            </div>
          }>
          <AnimatePresence mode="wait">
            <Header location={location} key={location.pathname + "1"} />
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/portfolio/"
                element={<Navigate to="/portfolio/all_works/" />}></Route>
              <Route
                path="portfolio/all_works/"
                element={
                  <Portfolio
                    tablabel="Все работы"
                    tabid="tab1"
                    tabpath={"/all_works/"}
                  />
                }></Route>
              <Route
                path="portfolio/logos/"
                element={
                  <Portfolio
                    tablabel="Логотипы"
                    tabid="tab2"
                    tabpath={"/logos/"}
                  />
                }></Route>
              <Route
                path="portfolio/websites/"
                element={
                  <Portfolio
                    tablabel="Веб-сайты"
                    tabid="tab3"
                    tabpath={"/websites/"}
                  />
                }></Route>
              <Route
                path="portfolio/identify/"
                element={
                  <Portfolio
                    tablabel="Айдентика"
                    tabid="tab4"
                    tabpath={"/identify/"}
                  />
                }></Route>
              <Route
                path="portfolio/illustrations/"
                element={
                  <Portfolio
                    tablabel="Иллюстрации"
                    tabid="tab5"
                    tabpath={"/illustrations"}
                  />
                }></Route>
              <Route
                path="portfolio/presentations/"
                element={
                  <Portfolio
                    tablabel="Презентации"
                    tabid="tab6"
                    tabpath={"/presentations/"}
                  />
                }></Route>
              <Route path="/services/" element={<Services />}></Route>
              <Route path="services/logos/" element={<Logos />}></Route>
              <Route
                path="services/web-design/"
                element={<Web_design />}></Route>
              <Route path="services/identify/" element={<Identify />}></Route>
              <Route
                path="services/illustrations/"
                element={<Illustrations />}></Route>
              <Route
                path="services/presentations/"
                element={<Presentations />}></Route>
              <Route path="/about/" element={<About />}></Route>
              <Route path="/contacts/" element={<Contacts />}></Route>
              {all_works.map((aw, i) => (
                <Route
                  exact
                  path={`/${aw.url}/`}
                  key={i}
                  element={
                    <Product
                      title={aw.title}
                      src={aw.main_src}
                      desc={aw.desc}
                      client={aw.client}
                    />
                  }></Route>
              ))}
              <Route path="*" element={<NotFound />} />
              <Route path="" element={<NotFound />} />
            </Routes>
            <Footer location={location} key={location.pathname + "2"} />
          </AnimatePresence>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
}
