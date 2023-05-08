import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/main/Header.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Footer = lazy(() => import("./components/main/Footer.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
import ScrollToTop from "./components/main/ScrollToTop.jsx";

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
              <Route path="*" element={<NotFound />} />
              <Route path="" element={<NotFound />} />
            </Routes>
            <Footer location={location} key={location.pathname + "2"} />
            <ScrollToTop/>
          </AnimatePresence>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
}
