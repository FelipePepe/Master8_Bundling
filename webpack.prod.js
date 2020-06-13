const common = require("./webpack.common.js");
const merge = require("webpack-merge");

const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "production",
  stats: "verbose",
  plugins: [
    new Dotenv({
      path: "./prod.env",
    }),
  ],
});
