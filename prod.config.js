const path = require("path");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInjector = require("html-webpack-injector");

let mode = "production";
let target = "browserslist";
const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
  }),
  new HtmlWebpackPlugin({
    template: "./index.html",
    chunks: ["main"],
  }),
  new HtmlWebpackInjector(),
  new webpack.DefinePlugin({
    PRODUCTION: JSON.stringify(true),
  }),
  new CompressionPlugin({
    algorithm: "gzip",
    test: /\.(js|css|html|svg)$/i,
  }),
];

module.exports = {
  mode,
  target,
  plugins,
  devtool: "source-map",
  entry: { main: "./src/index.js" },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
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
        minimizer: {
          implementation: ImageMinimizerPlugin.svgoMinify,
          options: {
            encodeOptions: {
              // Pass over SVGs multiple times to ensure all optimizations are applied. False by default
              multipass: true,
              plugins: [
                // set of built-in plugins enabled by default
                // see: https://github.com/svg/svgo#default-preset
                "preset-default",
              ],
            },
          },
        },
      }),
    ],
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    // assetModuleFilename: "assets/[hash][ext][query]",
    assetModuleFilename: "./img/[name][ext]",
    clean: true,
    publicPath: "/",
  },
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
                      // Options
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
