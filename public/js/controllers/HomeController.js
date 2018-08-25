'use strict';

foodMeApp.controller('HomeController',
    function HomeController($scope, customer, $location, Restaurant) {
  /* if (!customer.address) {
    $location.url('/login');
  } */
  
  //$("#wrapper").hide();
    alert("HomeController");
  
 $scope.myFunction = function() {
		 $location.url('/login');
    }
 
$scope.myFunction1 = function() {
		 $location.url('/register');
    }
 
 $scope.searchPage = function() {
		 $location.url('/search');
    }
 
 
});
