var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
    // change to .tsx if necessary
    entry: './Src/index.tsx',
    output: {
      filename: './bundle.js'
    },
    resolve: {
      // changed from extensions: [".js", ".jsx"]
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
      rules: [
        // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' } },
        { test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } },
        // addition - add source-map support
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
    devServer: {
      contentBase: "./Src",
    },
    externals: {
      "react": "React",
      "react-dom": "ReactDOM",
    },
    // addition - add source-map support
    devtool: "source-map"
  }