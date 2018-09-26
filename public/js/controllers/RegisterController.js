"use strict";

foodMeApp.controller("RegisterController", function RegisterController($scope,$location, $http) {
  //$scope.orderId = $routeParams.orderId;
    $("#Header").hide();
	$("#SideHeader").hide();
	$("#page-wrapper").css("margin-left", "0");
    //$("#wrapper").hide();

	$scope.loginpage = function() {
		 $http({
				method : "post",
				url : "/add_user",
				data : { "body" : { "email" : "sonu@gmail.com" , "password" : "sonu2303" }}
			}).then(function mySuccess(response) {
				$scope.myWelcome = response.data;
				alert($scope.myWelcome);
				$location.url("/login");
			}, function myError(response) {
				$scope.myWelcome = response.statusText;
				alert("ssdfwew");
				alert($scope.myWelcome);
			});
		
		//$location.url("/login");
    }
  
	$scope.myFunction1 = function() {
		 $location.url("/login");
    }
  
  
});
