'use strict';

foodMeApp.controller('SideHeaderController', function SideHeaderController($scope, $location) {
 
 
 
   
	$scope.addProduct = function() {

		 $location.url('/add_product_detail');
    } 

	 $scope.login = function() {

		 $location.url('/login');
    }

   $scope.profile = function() {
		 $location.url('/profile');
    } 
 
  $scope.edit_profile = function() {
		 $location.url('/edit_profile');
    } 
	
	$scope.settingPage = function() {
		 $location.url('/setting');
    }
});
