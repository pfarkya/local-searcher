'use strict';

foodMeApp.controller('EditProfileController',
    function EditProfileController($scope, customer, $location) {
		
    $("#wrapper").show();
	$("#SideHeader").show();
	$("#Header").show();

	  if($location.path() == "/edit_profile"){
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
		$location.url('/profile');
	}
	 
	  

 
});
