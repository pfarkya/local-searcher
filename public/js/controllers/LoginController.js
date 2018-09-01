'use strict';

foodMeApp.controller('LoginController',
    function LoginController($scope, customer, $location, Restaurant) {
  /* if (!customer.address) {
    $location.url('/login');
  } */
  
  $("#Header").hide();
  $("#SideHeader").hide();
  $("#page-wrapper").css("margin-left", "0");
  

  
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
