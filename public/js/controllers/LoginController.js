'use strict';

foodMeApp.controller('LoginController',
    function LoginController($scope, customer, $location, Restaurant) {
  /* if (!customer.address) {
    $location.url('/login');
  } */
  
  $("#wrapper").hide();
    alert("LoginController");
  
  $scope.myFunction = function() {
		 $location.url('/profile');
    }
	
	 $scope.my_Function = function() {
		 $location.url('/forgot_password');
    }
  $scope.my_Function2 = function() {
		 $location.url('/register');
    }
 

});
