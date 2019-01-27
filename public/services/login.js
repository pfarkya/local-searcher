angular.module('khoziApp').service('login',['$http',function($http){
  let self = this
  self.loggedIn = false
  self.user = {}
  self.isLogin = function() {
    return self.loggedIn
  }
  self.setLoggedIn = function(value) {
    self.loggedIn = value
  }

  self.setUserDetail = function(value) {
    console.log(value)
    self.user = value
  }

  self.getUserDetail = function(value) {
    return self.user
  }

  self.getProfile = function(){
    return $http({
      method : "GET",
      url : "/getProfile",
    }).then(function(response) {
      if(response.data) {
        self.setUserDetail(response.data)
      }
    }, function(response) {
      console.log("something wrong!")
    });
  }

  self.getEnterprises= function() {
    return $http({
      method : "GET",
      url : "/getEnterprises",
    })
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
