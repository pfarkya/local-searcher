'use strict';

foodMeApp.controller('ForgotPasswordController',
    function ForgotPasswordController($scope, customer, $location, Restaurant) {
alert("ForgotPsswordController");
  /* if (!customer.address) {
    $location.url('/login');
  } */
  
 
	$scope.myFunction = function() {
		 $location.url('/login');
    }
});
