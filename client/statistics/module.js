'use strict'
var angular = require('angular')
// TODO: uiRouter does not adhere to commonjs but instead exports its name directly
// I'd like to alter this so that webpack shims it to use CommonJS
var uiRouter = require('angular-ui-router')

module.exports = angular.module('championgg.tooltip', [uiRouter])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('statistics', {
      url: '/statistics'
    })
  }])