'use strict'
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    master: './client/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public/js/')
  }
}