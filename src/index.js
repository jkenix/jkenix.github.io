import React from "react";
import { createRoot } from "react-dom/client";

if (process.env.NODE_ENV !== "production") {
  require("../index.html");
}

import App from "./App.jsx";
import "./styles/lib/normalize.css";
import "./styles/base.scss";
import "./styles/layout.scss";
import "./styles/theme.scss";
import "./styles/module.scss";
import "./styles/media.scss";
import "./styles/state.scss";
import "./styles/mixins_var.scss";

const root = createRoot(document.getElementById('l-wrapper'));
root.render(<App />);