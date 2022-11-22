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
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import About from "./About";

const container = document.getElementById("wrapper");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
      <Routes>
        <Route path="/" element></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
