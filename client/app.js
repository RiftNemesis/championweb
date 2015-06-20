'use strict'
var angular = require('angular')
// ui.bootstrap does not follow CommonJS pattern
var bootstrap = require('exports?name="ui.bootstrap"!angular-bootstrap')
var tooltip = require('./tooltip/module')
var statistics = require('./statistics/module')

angular.module('championgg.core', [bootstrap.name, tooltip.name])