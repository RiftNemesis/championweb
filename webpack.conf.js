'use strict'
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    master: './client/app.js',
    vendor: ['angular', 'angular-bootstrap']
  },
  module: {
    loaders: [
      { test: /\.html$/, include: path.resolve(__dirname, './client'), loader: 'html' },
      { test: /angular-grid/, loader: 'exports?name="angularGrid"'}
    ]
  },
  output: {
    filename: '[name].js',
    publicPath: '/js',
    path: path.resolve(__dirname, './public/js/')
  },
  devServer: {
    contentBase: path.resolve(__dirname, './server/public'),
    historyApiFallback: true,
    proxy: {
      // proxy all requests to the base champion.gg server
      '/api/*': 'http://localhost:3000'
    }
  }
}