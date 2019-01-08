angular.module('khoziApp')
.controller('loginCtrl',['$scope','$http','$state','login', function($scope,$http,$state, login) {
  console.log('loginCtrl');
  let ctrl = this
  ctrl.loginModel = {}
  ctrl.login = function() {
    $http({
       method : "POST",
       url : "/login",
       data : ctrl.loginModel
     }).then(function(response) {
       alert("successfully login");
       login.setLoggedIn(true);
       $state.go('khojiApp');
     }, function(response) {
       console.log("status",response.status)
       if(response.status == 404) alert("Not a user yet Please register");
       else alert("Login Failed");
     });
	}
}])
