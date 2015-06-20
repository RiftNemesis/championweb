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
      controllerAs: 'statistics',
      resolve: {
        statistics: ['Statistics', function(Statistics) {
          return Statistics.get()
        }]
      }
    }
  }
}

function StatisticsController(roles, gridHeaders, statistics) {
  // roles: [ { role.name, role.label }]
  // role = { role.name, role.label }
  // statistics = [ { header }]
  this.roles = roles
  this.role = this.roles[0]
  this.headers = gridHeaders
  this.statistics = statistics
}

StatisticsController.prototype.chosenRole = function chosenRole() {

}