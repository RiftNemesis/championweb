'use strict'
var angular = require('angular')
var uiRouter = require('angular-ui-router')
var state = require('./state')

module.exports = angular.module('championgg.layout', [uiRouter])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state(state)
  }])