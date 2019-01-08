angular.module('khoziApp').service('login',['$http',function($http){
  let self = this
  this.loggedIn = false
  self.isLogin = function() {
    return self.loggedIn
  }
  self.setLoggedIn = function(value) {
    self.loggedIn = value
  }

  self.checkSessionExist = function() {
    $http({
      method : "GET",
      url : "/session",
    }).then(function(response) {
      if(response.data.user) {
        console.log(response)
        self.setLoggedIn(true);
      }
    }, function(response) {
      if(response) {
        console.log(response)
      }
      console.log("status",response.status)
      if(response.status == 404) alert("Not a user yet Please register");
      else alert("Login Failed");
    });
  }
}])
