"use strict";

foodMeApp.controller("RegisterController", function RegisterController($scope,$location, $http) {
  //$scope.orderId = $routeParams.orderId;
    $("#Header").hide();
	$("#SideHeader").hide();
	$("#page-wrapper").css("margin-left", "0");
    //$("#wrapper").hide();
  $scope.formdata = {}
	$scope.loginpage = function() {
		  $location.url("/login");
    }

	$scope.registerUser = function() {
    console.log($scope.formdata)
    $http({
       method : "POST",
       url : "/add_user",
       headers: {
         'Content-Type': "application/json"
       },
       data : $scope.formdata
     }).then(function(response) {
       $scope.myWelcome = response.data;
       alert("successfully register");
       $location.url("/profile");
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


});
