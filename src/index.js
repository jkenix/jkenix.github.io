import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./styles/lib/normalize.css";
import "./styles/base.scss";
import "./styles/layout.scss";
import "./styles/media.scss";
import "./styles/mixins_var.scss";
import "./styles/module.scss";
import "./styles/state.scss";
import "./styles/theme.scss";
import "./js/scripts.js";

// import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";
// import Home from "./pages/Home.jsx";
// import Company from "./pages/Company.jsx";

const container = document.getElementById("wrapper");
const defroot = createRoot(container);
// const root = hydrateRoot(domNode, reactNode);
if (container.hasChildNodes()) {
  // …Если в корневом элементе есть контент, то…
  hydrateRoot(container, <App />); // …"цепляем" приложение на существующий DOM.
} else {
  // …Иначе рендерим приложение стандартным образом
  defroot.render(<App />);
}
