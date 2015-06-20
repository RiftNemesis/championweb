function StatisticsService($http) {
  this.$http = $http
}
StatisticsService.$inject = ['$http']

StatisticsService.prototype.get = function get() {
  return this.$http.get('/api/statistics/')
}

module.exports = StatisticsService