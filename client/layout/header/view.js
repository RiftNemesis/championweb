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
  // donationUrl: string
  this.states = navigatableStates
  this.update = { active: true, headline: 'Badass Maintenance Occurring' }
  this.donationUrl = 'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=championgg%40outlook%2ecom&lc=AU&item_name=ChampionGG&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted'
  this.championsAnalyzed = 0
  this.patch = '5.12'
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