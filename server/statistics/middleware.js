'use strict'
var Router = require('express').Router
var routes = require('./route')

module.exports = function() {
  var router = Router()
  router.get('/', routes.index)
  return router
}