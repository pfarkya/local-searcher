'use strict';

foodMeApp.controller('ProfileController', function ProfileController($scope, $location) {
 
alert("ProfileController");
/* 
 $scope.routeIs = function(routeName) {
	  
	  alert(routeName);
    return $location.path() === routeName;
  }; */
  
  
   $scope.setting = function() {
		 $location.url('/setting');
    }
 
$scope.logout = function() {
		 $location.url('/login');
    }
 
  

});
