const plugins = [];
// Если Webpack сборка для разработки,
// то добавить плагин для горячей перезагрузки компонентов React
if (process.env.NODE_ENV === "development") {
  plugins.push("react-refresh/babel");
}
// Подключение модулей
module.exports = {
  // Подключение модулей для поддержки React и кроссбраузерности
  presets: ["@babel/preset-react", "@babel/preset-env"],
  plugins,
};
