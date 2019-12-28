const webpack = require("webpack");

module.exports = {
  mode: "development",

  entry: {
    filename: "./app.js"
  },
  output: {
    filename: "./build.js"
  },
  devServer: {
    inline: false,
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  }
};
