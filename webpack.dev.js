const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  devtool: 'cheap-module-source-map',
  profile: true,
  watch: true,
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?![ws])/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
  ],
};

module.exports = config;
