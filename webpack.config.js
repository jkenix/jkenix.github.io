const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}
if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
  }),
  new HtmlWebpackPlugin({
    template: "./index.html",
    chunks: ["main"],
  }),
  new CompressionPlugin({
    test: /\.js$|\.css$|\.html$/,
  }),
];

module.exports = {
  mode,
  target,
  plugins,
  devtool: "source-map",
  entry: { main: "./src/index.js" },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "src"),
      watch: true,
    },
    // static: "./docs",
    // watchFiles: ["./src"],
    hot: true,
    open: true,
  },

  output: {
    path: path.resolve(__dirname, "docs"),
    assetModuleFilename: "assets/[hash][ext][query]",
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
        type: mode === "production" ? "asset" : "asset/resource",
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
