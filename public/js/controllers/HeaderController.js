'use strict';

foodMeApp.controller('HeaderController', function HeaderController ($scope, $location) {
 
     $("#message").hide();
     $("#notification").hide();
	   
$scope.logout = function() {
		 $location.url('/login');
    }
 
 $scope.register = function() {
		 $location.url('/register');
    }
	  
	

});
