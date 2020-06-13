const common = require("./webpack.common.js");
const merge = require("webpack-merge");

const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  stats: "errors-only",
  devServer: {
    stats: "errors-only",
  },
  plugins: [
    new Dotenv({
      path: "./dev.env",
    }),
  ],
});
