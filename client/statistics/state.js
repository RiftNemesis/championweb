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
        champions: ['Champion', function(Champion) {
          return Champion.all()
        }]
      }
    }
  }
}

function StatisticsController(roles, gridHeaders, champions) {
  // roles: [ { role.name, role.label }]
  // role = { role.name, role.label }
  // champions = [ { header }]
  this.roles = roles
  this.role = this.roles[0]
  this.headers = gridHeaders
  this.champions = champions
}

StatisticsController.prototype.chosenRole = function chosenRole() {

}