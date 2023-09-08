import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import gifcat from "./img/YAgE.gif";

import Footer from "./components/Footer.jsx";
const Home = lazy(() => import("./pages/Home.jsx"));
const Company = lazy(() => import("./pages/Company.jsx"));
const Games = lazy(() => import("./pages/Games.jsx"));
const Career = lazy(() => import("./pages/Career.jsx"));
const News = lazy(() => import("./pages/News.jsx"));
const Contacts = lazy(() => import("./pages/Contacts.jsx"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            className="loading"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100vh",
              textAlign: "center",
              fontFamily: "AkrobatRegular",
              fontWeight: "900",
              fontSize: "4.5rem",
            }}>
            Загрузка...
            <div className="img__resp-block">
              <img
                src={gifcat}
                className="img__resp"
                width="600"
                height="600"
                alt="Gif cat"></img>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/career" element={<Career />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
