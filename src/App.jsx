import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// import gifcat from "./img/YAgE.gif";
const Home = lazy(() => import("./pages/Home.jsx"));
// const Company = lazy(() => import("./pages/Company.jsx"));
// const Games = lazy(() => import("./pages/Games.jsx"));
// const Career = lazy(() => import("./pages/Career.jsx"));
// const News = lazy(() => import("./pages/News.jsx"));
// const Contacts = lazy(() => import("./pages/Contacts.jsx"));

export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="l-preloader">
              <div className="preloader-content"></div>
            </div>
          }>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/company" element={<Company />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/career" element={<Career />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
}
