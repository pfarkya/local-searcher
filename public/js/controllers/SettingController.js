'use strict';

foodMeApp.controller('SettingController',
    function SettingController($scope, customer, $location, Restaurant) {
  /* if (!customer.address) {
    $location.url('/login');
  } */
  
 
    $scope.edit_setting = function() {
		 $location.url('/edit_setting');
    }
  
  
  
  $("#wrapper").show();
  $("#CreateAccount").hide();
  $("#SideHeader").show();
  $("#Header").show();
  $("#message").show();
  $("#notification").show();
  $("#page-wrapper").css("margin-left", "");
  
/*  $scope.myFunction = function() {
		 $location.url('/login');
    }
 
$scope.myFunction1 = function() {
		 $location.url('/register');
    }
 
 $scope.searchPage = function() {
		 $location.url('/search');
    }
  */
 
});
