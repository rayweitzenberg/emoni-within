const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src", "index.js"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"),
    },
    port: 8080,
    open: true,
    allowedHosts: [
      "avalon.local",
    ],
  },
  stats: "minimal",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/g,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      inject: "body",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "assets"),
          to: path.resolve(__dirname, "dist", "assets"),
        },
      ],
    }),
  ],
  devtool: "source-map",
};
