angular.module('khoziApp').service('auth',['$http',function($http){
  let self = this
  this.loggedIn = false
  self.isAuthenticated = function() {
    return self.loggedIn
  }
  self.setLoggedIn = function(value) {
    self.loggedIn = value
  }
}])
