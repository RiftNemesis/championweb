'use strict'
var angular = require('angular')
// ui.bootstrap does not follow CommonJS pattern
var bootstrap = require('exports?name="ui.bootstrap"!angular-bootstrap')
var tooltip = require('./tooltip/module')
var statistics = require('./statistics/module')

angular.module('championgg', [bootstrap.name, tooltip.name])
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true)
  }])
  .service('Champion', require('./data/champions'))