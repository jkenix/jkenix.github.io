require("ignore-styles");
require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-react", "@babel/preset-env"],
});
require("./server");
