import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { da  } from "./js/data.jsx";
import Product from "./components/main/Product.jsx";

const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contacts = lazy(() => import("./pages/Contacts.jsx"));

export default function App(props) {
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
            <Route path="portfolio/*" element={<Portfolio />}>
              <Route path="dadad" element={<Footer />} />
              <Route path=":id/*" element={<NotFound />} />
            </Route>
            <Route path="services" element={<Services />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contacts" element={<Contacts />}></Route>
            {/* <Route path="*" element={() => (<Product test={id.da} />)} /> */}
            <Route path="*" element={<NotFound />} />
            <Route path="" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
}
