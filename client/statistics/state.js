'use strict'
var layoutState = require('../layout/state')

module.exports = {
  parent: layoutState.name,
  name: 'statistics',
  url: '/statistics',
  views: {
    body: {
      template: require('./template.html')
    }
  }
}