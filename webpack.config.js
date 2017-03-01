'use strict';

require('dotenv').config();

const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');
const CleanPlugin = require('webpack-clean-plugin');

let production = process.env.NODE_ENV === 'production';

let plugins = [
  new HtmlPlugin({template: `${__dirname}/app/index.html`}),
  new ExtractText('bundle.css'),
  new webpack.DefinePlugin({
    __API_URL__: JSON.stringify(process.env.API_URL),
  }),
];

if (production) {
  plugins = plugins.concat([
    new CleanPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false,
      },
    }),
  ]);
  output.publicPath = //The cloudfront link in a string
}

module.exports = {
  plugins,
  devtool: 'eval',
  devServer: { historyApiFallback: true },
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
      },
    ],
  },
};
