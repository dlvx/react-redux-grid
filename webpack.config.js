const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {

    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
            test: /\.(css|scss)$/,
            use: [
              {loader: "style-loader"}, 
              {loader: "css-loader"}, 
              {loader: "sass-loader"}
            ]
        }
    ]
  },
  devServer: {
    proxy: {
      "/apis": {
        target: "https://swapi.co/api",
        secure: false,
        changeOrigin: true
      }
    },
    historyApiFallback: true
},
  plugins: [HtmlWebpackPluginConfig]
}