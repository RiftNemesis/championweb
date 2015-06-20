'use strict'
var assert = require('assert')
var _ = require('ramda')

var elementHasColumnName = _.curry(function(columnName, element) {
  return element.getText().then(function(text) {
    return text === columnName
  })
})

function statisticsStepDefinitions() {
  this.When(/^I am on the statistics page$/, function (callback) {
    browser.get('/statistics').then(callback)
  })

  this.Then(/^I should see a grid$/, function (callback) {
    // TODO: Ideally we'd have a different class than this but whatever
    browser.isElementPresent(by.css('.table.table-striped')).then(function(isPresent) {
      assert.ok(isPresent)
      callback()
    })
  })

  this.Then(/^the grid should have the column '(.*)'$/, function (columnName, callback) {
    // Currently implemented by having <td><span>name</span></td> unfortunately this appears to be done on the server side (i.e not bound)
    // Actually it's hard coded, holy crap
    var elementsWithColumnName = element.all(by.css('.table.table-striped thead td span')).filter(elementHasColumnName(columnName))
    elementsWithColumnName.count().then(function(count) {
      assert.equal(count, 1)
      callback()
    })
  })
}


module.exports = statisticsStepDefinitions