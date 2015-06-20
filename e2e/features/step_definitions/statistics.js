function statisticsStepDefinitions() {
  this.When(/^I am on the statistics page$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
    callback.pending()
  })

  this.Then(/^I should see a grid$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending()
  })

  this.Then(/^the grid should have the column '([\w\s]+)'$/, function (columnName, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending()
  })
}

module.exports = statisticsStepDefinitions