import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/lib/normalize.css";
import "./styles/base.scss";
import "./styles/layout.scss";
import "./styles/media.scss";
import "./styles/mixins_var.scss";
import "./styles/module.scss";
import "./styles/state.scss";
import "./styles/theme.scss";

import "./js/scripts.js";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Company from "./pages/Company.jsx";

const container = document.getElementById("wrapper");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/company" element={<Company />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
