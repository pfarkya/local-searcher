angular.module('khoziApp')
.controller('commonHeaderCtrl',['$state','login','$http',function($state,login,$http) {
  let ctrl = this
  ctrl.loginService = login
  ctrl.logout = function() {
    $http({
       method : "POST",
       url : "/logout"
     }).then(function(response) {
       login.setLoggedIn(false);
       $state.go('khojiApp');
     }, function(response) {
       console.log("status",response.status)
       if(response.status == 404) alert("Not a user yet Please register");
       else alert("Logout Failed");
     });
  }
  console.log('commonHeaderCtrl');
}])
