angular.module('khoziApp')
.controller('registerCtrl',['$scope','$http','$state','login',function($scope,$http,$state,login) {
  console.log('registerCtrl');
  let ctrl = this
  ctrl.user = {}
  ctrl.registerUser = function() {
    console.log(ctrl.user)
    $http({
       method : "POST",
       url : "/add_user",
       headers: {
         'Content-Type': "application/json"
       },
       data : ctrl.user
     }).then(function(response) {
       $scope.myWelcome = response.data;
       alert("successfully register");
       login.setLoggedIn(true);
       $state.go('khojiApp');
     }, function(response) {
       $scope.myWelcome = response.statusText;
       console.log("status",response.status)
       if(response.status == 409) alert("Already a user Please login");
       else alert("Registration Failed");
     });
     /*$http.post("/add_user",{body:$scope.formdata})
     .then(function(response) {
        $scope.myWelcome = response.data;
        alert("successfully register");
        $location.url("/profile");
      }, function(response) {
        $scope.myWelcome = response.statusText;
        console.log("status",response.status)
        if(response.status == 409) alert("Already a user Please login");
        else alert("Registration Failed");
      });*/
    }
}])
