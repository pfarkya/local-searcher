'use strict';

foodMeApp.controller('HomeController',
    function HomeController($scope, customer, $location, Restaurant) {
		
	//$("#wrapper").hide();
	$("#SideHeader").hide();
	$("#page-wrapper").css("margin-left", "0");
	
	//var myEl = angular.element( document.querySelector( "#page-wrapper" ) );
	//myEl.addClass("canvas-menu.mini-navbar");
	
	//$("#page-wrapper").addClass("canvas-menu.mini-navbar");
	//$("#page-wrapper").addClass("children");
	$("#Header").show();
  
   
	  if($location.path() == "/"){
		alert($location.path());
		$("#message").hide();
		$("#notification").hide();
		$("#CreateAccount").show();
		$("#logout").children().text("Log In").addClass("fa fa-sign-out");
		//$("#logout").children().addClass("fa fa-sign-out");
		  
	  }
	  else{
		  alert($location.path());
		  //document.getElementById("logout").innerText="Create Account";
		  //$("#logout").children().text("Create Account");
	  } 
 
  
 $scope.register = function() {

		 $location.url('/register');
    }
 
$scope.myFunction1 = function() {
		 $location.url('/register');
    }
 
 $scope.searchPage = function() {
		 $location.url('/search');
    }
 
 
});
