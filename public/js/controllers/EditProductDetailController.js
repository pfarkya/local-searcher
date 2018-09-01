'use strict';

foodMeApp.controller('EditProductDetailController',
    function EditProductDetailController($scope, customer, $location) {
		
    $("#wrapper").show();
	$("#SideHeader").show();
	$("#Header").show();

	  if($location.path() == "/edit_product_detail"){
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
	  
	  
	    $scope.save_details = function() {
		 alert("save successfully");
		$location.url('/add_product_detail');
	}
	 
	  

 
});
