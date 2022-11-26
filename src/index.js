import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import App from "./App.jsx";
import "./styles/lib/normalize.css";
import "./styles/base.scss";
import "./styles/layout.scss";
import "./styles/media.scss";
import "./styles/mixins_var.scss";
import "./styles/module.scss";
import "./styles/state.scss";
import "./styles/theme.scss";
// import "./js/scripts.js";
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
