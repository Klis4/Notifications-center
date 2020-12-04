const path = require('path');
const webpack= require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'Notification_Center.js'
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin({
        // Options...
      }),
    new HtmlWebpackPlugin({
        //Options
        template: __dirname + '/src/index.html'
    })
  ], 

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  }
  
};

