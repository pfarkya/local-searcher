'use strict';

foodMeApp.controller('SearchController',
    function SearchController($scope, customer, $location, Restaurant) {
  /* if (!customer.address) {
    $location.url('/login');
  } */
    ///$("#wrapper").hide();

  
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
