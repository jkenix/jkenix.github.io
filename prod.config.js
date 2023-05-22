const path = require("path"); // Модуль для работы с путями к файлам и каталогам
const webpack = require("webpack"); // Сборщик модулей
const CompressionPlugin = require("compression-webpack-plugin"); // Плагин для сжатия файлов в .gzip
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Плагин извлекает CSS в отдельные файлы
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin"); // Плагин для сжатия изображений
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Плагин для генерации HTML-файла по шаблону
const HtmlWebpackInjector = require("html-webpack-injector"); // Плагин внедряет код Html по шаблону

let mode = "production"; // Объявление режима "продакшн"
let target = "browserslist"; // Получение списка браузеров
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
  // Перезаписывает переменную во время сборки
  // Для избежания вызова лишних функций
  new webpack.DefinePlugin({
    PRODUCTION: JSON.stringify(true),
  }),
  // Подключение плагина сжатия .gzip
  new CompressionPlugin({
    algorithm: "gzip",
    test: /\.(js|css|html|svg)$/i,
  }),
];
// Применение режима, цели, плагинов, откладки, точки входа и выхода
module.exports = {
  mode,
  target,
  plugins,
  devtool: "source-map", // Местоположение исходного кода показывается полностью
  entry: { main: "./src/index.js" }, // Точка входа Webpack
  optimization: {
    runtimeChunk: "single", // Генерировать чанки по отдельности
    splitChunks: {
      // Разбивание чанков на части
      chunks: "all", // Количество чанков
      maxInitialRequests: Infinity, // Мниимальный размер запроса файлов
      minSize: 0, // Размер файлов
      // cacheGroups: {
      //   vendor: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name(module) {
      //       // получает имя, то есть node_modules/packageName/not/this/part.js
      //       // или node_modules/packageName
      //       const packageName = module.context.match(
      //         /[\\/]node_modules[\\/](.*?)([\\/]|$)/
      //       )[1];
      //       // имена npm-пакетов можно, не опасаясь проблем, использовать
      //       // в URL, но некоторые серверы не любят символы наподобие @
      //       return `npm.${packageName.replace("@", "")}`;
      //     },
      //   },
      // },
    },
    // splitChunks: {
    //   chunks: "async",
    //   minSize: 20000,
    //   minRemainingSize: 0,
    //   minChunks: 1,
    //   maxAsyncRequests: 30,
    //   maxInitialRequests: 30,
    //   enforceSizeThreshold: 50000,
    //   cacheGroups: {
    //     defaultVendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       priority: -10,
    //       reuseExistingChunk: true,
    //     },
    //     default: {
    //       minChunks: 2,
    //       priority: -20,
    //       reuseExistingChunk: true,
    //     },
    //   },
    // },
    minimizer: [
      // Переопределяет минимизатор по умолчанию
      "...",
      // new ImageMinimizerPlugin({
      //   minimizer: {
      //     implementation: ImageMinimizerPlugin.squooshMinify,
      //     options: {
      //       encodeOptions: {
      //         mozjpeg: {
      //           // That setting might be close to lossless, but it’s not guaranteed
      //           // https://github.com/GoogleChromeLabs/squoosh/issues/85
      //           quality: 80,
      //         },
      //         webp: {
      //           quality: 85,
      //         },
      //         avif: {
      //           // https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
      //           cqLevel: 0,
      //         },
      //       },
      //     },
      //   },
      // }),
      new ImageMinimizerPlugin({
        // Использование ImageMinimizerPlugin для сжатия svg
        minimizer: {
          implementation: ImageMinimizerPlugin.svgoMinify,
          options: {
            encodeOptions: {
              multipass: true,
              plugins: ["preset-default"],
            },
          },
        },
      }),
    ],
  },
  output: {
    // Указание выходных файлов для ресурсов
    path: path.resolve(__dirname, "docs"),
    // assetModuleFilename: "assets/[hash][ext][query]",
    assetModuleFilename: "./img/[name][ext]",
    clean: true,
    publicPath: "/",
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
