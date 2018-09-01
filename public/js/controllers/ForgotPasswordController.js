'use strict';

foodMeApp.controller('ForgotPasswordController',
    function ForgotPasswordController($scope, customer, $location, Restaurant) {

	$("#Header").hide();
	$("#SideHeader").hide();
	$("#page-wrapper").css("margin-left", "0");
	
	
  /* if (!customer.address) {
    $location.url('/login');
  } */
  
 
	$scope.myFunction = function() {
		 $location.url('/login');
    }
});
