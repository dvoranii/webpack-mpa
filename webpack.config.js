import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: {
    main: "./src/main.js",
    quote: "./src/quote/quote.js",
  },
  output: {
    publicPath: "/",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: "/index.html" },
        { from: /^\/about$/, to: "/about.html" },
        { from: /^\/contact$/, to: "/contact.html" },
        { from: /^\/quote$/, to: "/quote.html" },
        {
          from: /^\/service-categories\/sporting-goods\/$/,
          to: "/sports.html",
        },
        {
          from: /^\/service-categories\/transportation\/$/,
          to: "/transportation.html",
        },
        {
          from: /^\/service-categories\/transportation\/air\/$/,
          to: "/air.html",
        },
        {
          from: /^\/service-categories\/transportation\/ocean\/$/,
          to: "/ocean.html",
        },
        {
          from: /^\/service-categories\/transportation\/truck\/$/,
          to: "/truck.html",
        },
        {
          from: /^\/service-categories\/transportation\/warehouse\/$/,
          to: "/warehouse.html",
        },
      ],
    },
    headers: {
      "Cache-Control": "no-store",
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
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about/about.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact/contact.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "quote.html",
      template: "./src/quote/quote.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "sports.html",
      template: "./src/service-categories/sporting-goods/sports.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "transportation.html",
      template: "./src/service-categories/transportation/transportation.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "air.html",
      template: "./src/service-categories/transportation/air/air.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "ocean.html",
      template: "./src/service-categories/transportation/ocean/ocean.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "truck.html",
      template: "./src/service-categories/transportation/truck/truck.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "warehouse.html",
      template:
        "./src/service-categories/transportation/warehouse/warehouse.html",
      inject: true,
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
