'use strict';

foodMeApp.controller('Edit_SettingController',
    function Edit_SettingController($scope, $location) {
  /* if (!customer.address) {
    $location.url('/login');
  } */
  $("#wrapper").show();
  $("#CreateAccount").hide();
  $("#SideHeader").show();
  $("#Header").show();
  $("#message").show();
  $("#notification").show();
  $("#page-wrapper").css("margin-left", "");
  
  $scope.save_details = function() {
		 alert("Details saved successfully");
		 $location.url('/setting');
    }
 
 
 /*
$scope.myFunction1 = function() {
		 $location.url('/register');
    }
 
 $scope.searchPage = function() {
		 $location.url('/search');
    }
  */
 
});
