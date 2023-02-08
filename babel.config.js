const plugins = [];
if (process.env.NODE_ENV === "development") {
  plugins.push("react-refresh/babel");
}

module.exports = {
  presets: ["@babel/preset-react", "@babel/preset-env"],
  plugins,
};
