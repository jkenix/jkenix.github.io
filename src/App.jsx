import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { all_works } from "./js/data.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Product = lazy(() => import("./components/main/Product.jsx"));
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
            <Route path="portfolio/" element={<Portfolio />}>
              <Route path=":id" element={<NotFound />} />
              {/* {all_works.map((aw, i) => (
                <Route
                  exact path={`:id/*${aw.id}/`}
                  key={i}
                  element={<Product desc={aw.desc} src={aw.src} />}></Route>
              ))} */}
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            {all_works.map((aw, i) => (
              <Route
                exact
                path={`/${aw.id}/`}
                key={i}
                element={<Product title={aw.title} desc={aw.desc} src={aw.src} />}></Route>
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
