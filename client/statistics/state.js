'use strict'
var layoutState = require('../layout/state')

module.exports = {
  parent: layoutState.name,
  name: 'statistics',
  url: '/statistics',
  data: {
    displayInNav: true,
    navLabel: 'Statistics'
  },
  views: {
    body: {
      template: require('./template.html'),
      controller: StatisticsController,
      controllerAs: 'statistics'
    }
  }
}

function StatisticsController() {
  
}