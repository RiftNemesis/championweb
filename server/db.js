"use strict";
var mongoose = require('mongoose');
module.exports = function(callback) {
  mongoose.connect('mongodb://localhost/championgg', function(error) {
    if(error) {
      return console.error('connection error', error)
    }
    console.log('Connected to Mongoose')
    callback()
  })
}