if (process.env.NODE_ENV !== "production") {
  require("../index.html");
}
import "./styles/lib/normalize.css";
import "./styles/base.scss";
import "./styles/layout.scss";
import "./styles/theme.scss";
import "./styles/module.scss";
import "./styles/media.scss";
import (/* webpackPrefetch: true */ "./styles/state.scss");
import "./styles/mixins_var.scss";
import (/* webpackPreload: true */ "./js/scripts.js");
// import "./js/scripts.js";
