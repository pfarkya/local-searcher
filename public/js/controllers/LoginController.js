'use strict';

foodMeApp.controller('LoginController',
    function LoginController($scope, customer, $location, Restaurant) {
  /* if (!customer.address) {
    $location.url('/login');
  } */
  $scope.first_login=1;
  $("#Header").hide();
  $("#SideHeader").hide();
  $("#page-wrapper").css("margin-left", "0");
  

  
  $scope.login = function() {
	  
	  if  ($scope.first_login==1){
			$scope.first_login=2;		  
			$("#Fmodal").modal();
			$("#popupheader").text("Business Details");
			$("#heading").text("For First login fill the business details");
			//document.getElementById("modalcontent").innerHTML = "";
			document.getElementById("modalcontent").innerHTML = "<div id='tab-1' class='tab-pane active'><div class='panel-body' ><fieldset class='form-horizontal' ><div class='form-group'><label class='col-sm-3 control-label' style='text-align:left'>Are you Business User:</label><div class='col-sm-9'><select id='usertype' class='form-control' ><option value='select' selected>--select--</option><option value='no'>NO</option><option value='yes'>YES</option></select></div></div><div class='form-group'><label class='col-sm-3 control-label' style='text-align:left' >Choose Catagory:</label><div class='col-sm-9'><select id='status' class='form-control' ><option value='select' selected>--select--</option><option value='Service'>Service Provider</option><option value='Product'>Product Provider</option></select></div></div><div class='form-group'><label  class='col-sm-3 control-label ' style='text-align:left' >Choose Sub Catagory:</label></div><div ><div  id='Service' hidden><div class='checkbox col-md-3 col-sm-4'><label> <input type='checkbox'><i></i>  Retail </label></div><div class='checkbox col-md-3 col-sm-4'><label> <input type='checkbox'><i></i>  Entertainment </label></div><div class='checkbox col-md-3 col-sm-4'><label> <input type='checkbox'><i></i>  HealthCare </label></div><div class='checkbox col-md-3 col-sm-4'><label> <input type='checkbox'><i></i>  Medical </label></div><div class='checkbox col-md-3 col-sm-4'><label> <input type='checkbox'><i></i>  Construction </label></div><div class='checkbox col-md-3 col-sm-4'><label> <input type='checkbox'><i></i>  Carpentary </label></div></div><div id='Product' hidden><div class='checkbox col-md-3 col-sm-4'><label> <input type='checkbox'><i></i>  Education </label></div><div class='checkbox col-md-3 col-sm-4'><label> <input type='checkbox'><i></i>  Retail </label></div><div class='checkbox col-md-3 col-sm-4'><label> <input type='checkbox'><i></i>  Entertainment </label></div><div class='checkbox col-md-3 col-sm-4'><label> <input type='checkbox'><i></i>  HealthCare </label></div><div class='checkbox col-md-3 col-sm-4'><label> <input type='checkbox'><i></i>  Medical </label></div><div class='checkbox col-md-3 col-sm-4'><label> <input type='checkbox'><i></i>  Construction </label></div><div class='checkbox col-md-3 col-sm-4'><label> <input type='checkbox'><i></i>  Carpentary </label></div><div class='checkbox col-md-3 col-sm-4'><label> <input type='checkbox'><i></i>  Design </label></div><div class='checkbox col-md-3 col-sm-4'><label> <input type='checkbox'><i></i>  Manufacture </label></div></div></div></fieldset></div></div>";
			
	  }else{
		$location.url('/profile');
	  }
	  
}
	

$(document).on('change', '#status', function (event) {
if($( "#status").val()=="Service"){
        $("#Product").hide();
		 $("#Service").show();

}else if ($( "#status" ).val()=="Product"){
        $("#Service").hide();
		$("#Product").show();

}else{
	$("#Service").hide();
	$("#Product").hide();
}
});
	
	
	
$("#popupsave").click(function(){
	
if($( "#status").val()=="select"){
	alert("Please select Choose Catagory") 
	return;
}


if($( "#status").val()=="sjkhelect"){
	alert("Please select atleast one sub Catagory") 
	return;
}
		$location.url('/profile');
		$("#Fmodal").modal('hide');
	    alert("Business Profile save successfully !");
		
		
});
	
	
	
	
$scope.my_Function = function() {
	$location.url('/forgot_password');
}
$scope.my_Function2 = function() {
	$location.url('/register');
}
 

});
