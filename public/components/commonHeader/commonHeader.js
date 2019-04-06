angular.module('khoziApp')
.controller('commonHeaderCtrl',['$state','login','$http', '$mdSidenav',function($state,login,$http,$mdSidenav) {
  let ctrl = this
  ctrl.search = ''
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
  ctrl.toggleSidenav = buildToggler('closeEventsDisabled');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }
}])
