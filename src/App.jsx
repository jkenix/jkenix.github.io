import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { all_works } from "./js/data.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Product = lazy(() => import("./pages/Product.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contacts = lazy(() => import("./pages/Contacts.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

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
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/portfolio" element={<Navigate to="/portfolio/all_works" />}></Route>
            <Route
              path="portfolio/all_works"
              element={
                <Portfolio
                  tablabel="Все работы"
                  tabid="tab1"
                  tabpath={"/all_works"}
                />
              }></Route>
            <Route
              path="portfolio/logos"
              element={
                <Portfolio
                  tablabel="Логотипы"
                  tabid="tab2"
                  tabpath={"/logos"}
                />
              }></Route>
            <Route
              path="portfolio/websites"
              element={
                <Portfolio
                  tablabel="Веб-сайты"
                  tabid="tab3"
                  tabpath={"/websites"}
                />
              }></Route>
            <Route
              path="portfolio/style"
              element={
                <Portfolio
                  tablabel="Фирменный стиль"
                  tabid="tab4"
                  tabpath={"/style"}
                />
              }></Route>
            <Route
              path="portfolio/illustrations"
              element={
                <Portfolio
                  tablabel="Иллюстрации"
                  tabid="tab5"
                  tabpath={"/illustrations"}
                />
              }></Route>
            <Route
              path="portfolio/presentations"
              element={
                <Portfolio
                  tablabel="Презентации"
                  tabid="tab6"
                  tabpath={"/presentations"}
                />
              }></Route>
            <Route
              path="portfolio/creatives"
              element={
                <Portfolio
                  tablabel="Креативы"
                  tabid="tab7"
                  tabpath={"/creatives"}
                />
              }></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            {all_works.map((aw, i) => (
              <Route
                exact
                path={`/${aw.title}/`}
                key={i}
                element={
                  <Product
                    tablabel={aw.title}
                    title={aw.title}
                    desc={aw.desc}
                    src={aw.main_src}
                  />
                }></Route>
            ))}
            <Route path="*" element={<NotFound />} />
            <Route path="" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
}
