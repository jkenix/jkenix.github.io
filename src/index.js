import React from "react"; // Подключение модулей React
import { createRoot } from "react-dom/client"; // Подключение модулей React
// Если режим разработки не production
// Вызвать точку входа index.html для разработки
if (process.env.NODE_ENV !== "production") {
  require("../index.html");
}
// Импортирование компонентов и файлов стилей
import App from "./App.jsx";
import "./styles/lib/normalize.css";
import "./styles/base.scss";
import "./styles/layout.scss";
import "./styles/theme.scss";
import "./styles/module.scss";
import "./styles/media.scss";
import "./styles/state.scss";
import "./styles/mixins_var.scss";
// Рендер компонентов React
const root = createRoot(document.getElementById("l-wrapper"));
root.render(<App />);
