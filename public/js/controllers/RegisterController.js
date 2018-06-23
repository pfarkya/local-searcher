'use strict';

foodMeApp.controller('RegisterController', function RegisterController($scope,$location, $routeParams) {
  //$scope.orderId = $routeParams.orderId;
  
  
  alert("RegisterController");
  
  $scope.myFunction = function() {
		 $location.url('/login');
    }
  
	$scope.myFunction1 = function() {
		 $location.url('/login');
    }
  
  
});
