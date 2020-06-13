const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  entry: {
    app: "./index.tsx", //! fichero con el que se trabaja.
    appStyles: ["./styles.scss"],
  },
  output: {
    //! fichero a producción.
    filename: "[name].[chunkhash].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    //! aquí van los loaders
    rules: [
      //! se van a realizar los transpilados
      {
        test: /\.tsx?$/, //! coja todos los ts
        exclude: /node_modules/, //! no entre en node-modules
        loader: "babel-loader", //! se lo pasa a babel-loader
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]_[hash:base64:5]",
              },
              localsConvention: "camelCase", //! Cambia el nombre de los objetos del css a camelCase
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: "url-loader",
        options: {
          limit: 5000,
          esModule: false,
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", //! output a dist
      template: "index.html", //! input de donde se lee
      //   hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
