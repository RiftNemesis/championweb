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
  // The fields that the view listens to, in case you don't want to trawl
  // through it:
  // states: [ {label: string, name: string }]
  // update: { active: boolean, headline: string }
  this.states = navigatableStates
  this.update = { active: true, headline: 'Badass Maintenance Occurring' }
}

function getNavigatableStates($state) {
  var stateList = $state.get()
  return stateList
    .filter(function(state) {
      return state.data && state.data.displayInNav
    })
    .map(function(state) {
      return { label: state.data.navLabel, name: state.name }
    })
  }