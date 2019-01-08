'use strict';

foodMeApp.controller('AddProductDetailController',
    function AddProductDetailController($scope, customer, $location, Restaurant) {
		
    $("#wrapper").show();
	$("#SideHeader").show();
	$("#Header").show();

	  if($location.path() == "/add_product_detail"){
		//alert($location.path());
		$("#message").show();
		$("#notification").show();
		$("#CreateAccount").hide();
		$("#logout").children().text("Log Out").addClass("fa fa-sign-out");		  
	  }
	  else{
		  alert($location.path());
		  //document.getElementById("logout").innerText="Create Account";
		  //$("#logout").children().text("Create Account");
	  }
	  
	  
	   $scope.edit_details = function() {
		 $location.url('/edit_product_detail');
    }
	  

 
});
