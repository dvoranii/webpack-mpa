import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serves files from dist
    },
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [
        { from: /^\/$/, to: "/index.html" }, // Root path
        { from: /^\/about$/, to: "/about.html" }, // About page
        { from: /^\/contact$/, to: "/contact.html" }, // Contact page
      ],
    },
    hot: true,
    port: 8080,
    open: true,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about/about.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact/contact.html",
      chunks: ["contact"],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
