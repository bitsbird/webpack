const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry
  entry: {
    main: "./src/main.js"
  },
  mode: "development",
  //enable sourcemap in dev env
  devtool: "inline-source-map",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/"
  },
  devServer: {
    // see errors in the browser window
    overlay: true,
    contentBase: "dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "env",
                  {
                    debug: false,
                    modules: false,
                    targets: {
                      browsers: ["last 2 versions", "ie >= 11"]
                    }
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          //name file
          { loader: "file-loader", options: { name: "[name].html" } },
          //extract html to his own file
          { loader: "extract-loader" },
          //load html
          { loader: "html-loader", options: { attrs: ["img:src"] } }
        ]
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
            query: {
              inlineRequires: /img\//,
              precompileOptions: { knownHelpersOnly: false }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          //with sourcemap
          {
            loader: "css-loader?sourceMap=true",
            query: {
              modules: true,
              localIdentName: "[name]-[local]--[hash:base64:8]"
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          //with sourcemap
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(jpg|gif|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      underscore: "lodash",
      marionette: "backbone.marionette/lib/backbone.marionette.esm.js"
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.hbs",
      inject: true,
      title: "Link's Journal"
    })
  ]
};
