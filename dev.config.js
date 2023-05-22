const path = require("path"); // Модуль для работы с путями к файлам и каталогам
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Плагин извлекает CSS в отдельные файлы
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Плагин для генерации HTML-файла по шаблону
const HtmlWebpackInjector = require("html-webpack-injector"); // Плагин внедряет код Html по шаблону
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin"); // Плагин горячей перезагрузки для компонентов React

let mode = "development"; // Объявление режима "разработка"
let target = "web"; // Указание цели использования в браузерной среде
const plugins = [
  // Подключение плагинов
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
  }),
  new HtmlWebpackPlugin({
    // Настройка плагина для генерации html файла
    template: "./index.html",
    chunks: ["main"],
  }),
  new HtmlWebpackInjector(),
  new ReactRefreshWebpackPlugin(),
];
// Применение режима, цели, плагинов, откладки, точки входа и выхода
module.exports = {
  mode,
  target,
  plugins,
  devtool: "eval-cheap-source-map", // Исходный код отображается только по номерам строк
  entry: { main: "./src/index.js" }, // Точка входа Webpack
  output: {
    // Указание выходных файлов для ресурсов
    publicPath: "/",
    assetModuleFilename: "./img/[name][ext]",
    // assetModuleFilename: (pathData) => {
    //   const filepath = path
    //     .dirname(pathData.filename)
    //     .split("/")
    //     .slice(1)
    //     .join("/");
    //   return `${filepath}/[name][ext]`;
    // },
  },
  devServer: {
    // Настройки сервера для разработки
    historyApiFallback: true,
    static: [
      {
        // Указание входной директории с файлами
        directory: path.join(__dirname, "src"),
        watch: true, // Просмотр изменений в файлах
      },
    ],
    hot: true, // Горячая перезагрузка при изменении файлов
    open: true, // Запускать сервер в браузере при старте
  },

  optimization: {
    runtimeChunk: true, // Алгоритм оптимизации по умолчанию
  },
  // Подключение модулей.
  // test - формат файлов, exlude - исключения, use - используемый модуль
  module: {
    rules: [
      { test: /\.(html)$/, exclude: /node_modules/, use: ["html-loader"] },
      {
        test: /\.(s[ac]|c)ss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Oпции
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
};
