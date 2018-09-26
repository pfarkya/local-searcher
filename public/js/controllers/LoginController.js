'use strict';

foodMeApp.controller('LoginController',
    function LoginController($scope, customer, $location, Restaurant, $http) {
  /* if (!customer.address) {
    $location.url('/login');
  } */
  $scope.first_login=1;
  $("#Header").hide();
  $("#SideHeader").hide();
  $("#page-wrapper").css("margin-left", "0");


  $scope.formdata = {}
  $scope.login = function() {
    $http({
       method : "POST",
       url : "/login",
       data : $scope.formdata
     }).then(function(response) {
       alert("successfully login");
       $location.url("/profile");
     }, function(response) {
       console.log("status",response.status)
       if(response.status == 404) alert("Not a user yet Please register");
       else alert("Login Failed");
     });
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
