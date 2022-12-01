import React from "react";
import { renderToString } from "react-dom/server";
import { createRoot } from "react-dom/client";

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
if (container.hasChildNodes()) {
  renderToString(<App />, container);
  hydrateRoot(<App />, container);
} else {
  defroot.render(<App />);
}
