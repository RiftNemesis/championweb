'use strict'

module.exports = {
  template: require('./template.html'),
  controller: ['navigatableStates', HeaderCtrl],
  controllerAs: 'nav',
  resolve: {
    navigatableStates: ['$state', getNavigatableStates]
  }
}

function HeaderCtrl(navigatableStates) {
  this.states = navigatableStates
}

function getNavigatableStates($state) {
  var stateList = $state.get()
  return stateList.filter(function(state) {
    return state.data && state.data.navigatable
  })
}