ChampionService.$inject = ['$http']
function ChampionService($http) {
  this.$http = $http
}

ChampionService.prototype.all = function all() {
  return this.$http.get('/api/champions')
}

module.exports = ChampionService;