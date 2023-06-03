const path = require("path");
const htmlWebpackPlgun=require('html-webpack-plugin')
module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  resolveLoader: {
    modules: ["node_modules", "./my-loader"],
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        //使用自定义loader
        use: ["my-loader.js"],
      },
      {
        test:/\.css$/,
        use:["style-loader","css-loader"]
      }
    ],
  },
  plugins:[new htmlWebpackPlgun()]
};
