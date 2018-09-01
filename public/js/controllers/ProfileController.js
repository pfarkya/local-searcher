'use strict';

foodMeApp.controller('ProfileController', function ProfileController($scope, $location , $rootScope) {
 
    $("#wrapper").show();
	$("#SideHeader").show();
	$("#Header").show();
	$("#page-wrapper").css("margin-left", "");

	   if($location.path() == "/profile"){
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
    
	
$scope.add_newproduct = function() {
	$("#popupheader").text("Project Details");
	$("#addproduct").before("<div class='col-md-3' ><div class='ibox' ng-click='add_details()' ><div class='ibox-content product-box'><div class='product-imitation'>[ INFO ]</div><div class='product-desc'><span class='product-price'>$10</span><small class='text-muted'>Category</small><a href='ecommerce_product_detail.html#' class='product-name'> Product</a><div class='small m-t-xs'>Many desktop publishing packages and web page editors now.</div><div class='m-t text-righ'><a href='ecommerce_product_detail.html#' class='btn btn-xs btn-outline btn-primary'>Info <i class='fa fa-long-arrow-right'></i> </a></div></div></div></div></div>");

}	



	
$("#popupsave").click(function(){
	$scope.add_newproduct();
	    //document.getElementById('Fmodal').style.display = "none";
		//$($("#Fmodal").attr("data-target")).modal("hide");
		$("#Fmodal").modal('hide');
	    alert("Product Add successfully !");
});
	
	

$scope.div_show = function() {
	
$("#Fmodal").modal();
document.getElementById("modalcontent").innerHTML = "<div class='panel-body'><fieldset class='form-horizontal'><div class='form-group'><label class='col-sm-4 control-label'>Product Name:</label><div class='col-sm-8'><input type='text' class='form-control' placeholder='Product name'></div></div><div class='form-group'><label class='col-sm-4 control-label'>Product Price:</label><div class='col-sm-8'><input type='text' class='form-control' placeholder='$160.00'></div></div><div class='form-group'><label class='col-sm-4 control-label'>Tag Title:</label><div class='col-sm-8'><input type='text' class='form-control' placeholder='...'></div></div><div class='form-group'><label class='col-sm-4 control-label'>Product Description:</label><div class='col-sm-8'><input type='textarea' class='form-control' placeholder='Sheets containing Lorem'></div></div><div class='form-group'><label class='col-sm-4 control-label'>Meta Tag Keywords:</label><div class='col-sm-8'><input type='text' class='form-control' placeholder='Lorem, Ipsum, has, been'></div></div></fieldset></div>";
}

$scope.div_hide = function() {
document.getElementById('Fmodal').style.display = "none";
}	

$scope.profile = function() {
	 $location.url('/profile');
}

$scope.add_details = function() {

	 $location.url('/add_product_detail');
}

	
	
	
	
});
