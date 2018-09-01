'use strict';

foodMeApp.controller('RegisterController', function RegisterController($scope,$location, $routeParams) {
  //$scope.orderId = $routeParams.orderId;
    $("#Header").hide();
	$("#SideHeader").hide();
	$("#page-wrapper").css("margin-left", "0");
    //$("#wrapper").hide();

  $scope.myFunction = function() {
		 $location.url('/login');
    }
  
	$scope.myFunction1 = function() {
		 $location.url('/login');
    }
  
  
});
