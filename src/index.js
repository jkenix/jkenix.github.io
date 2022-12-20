import React from "react";
import {createRoot} from "react-dom/client";

import App from "./App.jsx";
import "./styles/lib/normalize.css";
import "./styles/lib/itc-slider.css"
import "./styles/base.scss";
import "./styles/layout.scss";
import "./styles/media.scss";
import "./styles/mixins_var.scss";
import "./styles/module.scss";
import "./styles/state.scss";
import "./styles/theme.scss";

const container = document.getElementById("wrapper");
const defroot = createRoot(container);
defroot.render(<App />);