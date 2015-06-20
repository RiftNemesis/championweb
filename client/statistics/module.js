'use strict'
var angular = require('angular')
var layout = require('../layout/module')
// TODO: uiRouter does not adhere to commonjs but instead exports its name directly
// I'd like to alter this so that webpack shims it to use CommonJS
var uiRouter = require('angular-ui-router')
var state = require('./state')

module.exports = angular.module('championgg.tooltip', [uiRouter, layout.name])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state(state)
  }])
  .constant('gridHeaders', require('./gridHeaders'))
  .constant('roles', require('./roles'))
  .service('Statistics', require('./service'))