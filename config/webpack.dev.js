const path = require("path");

module.exports = {
  //relative paths where webpack is run from (root prj here)
  entry: {
    // user array if have multiple files, whey will be concat
    main: "./src/main.js"
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
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
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.html$/,
        use: [
          //how shall I name the file
          {
            loader: "file-loader",
            options: { name: "[name].html" }
          },
          //make a separate file, don't include in main bundle
          {
            loader: "extract-loader"
          },
          // lint the file
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src"]
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "img/[name]-[hash:8].[ext]" }
          }
        ]
      }
    ]
  }
};
