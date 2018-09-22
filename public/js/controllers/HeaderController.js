'use strict';

foodMeApp.controller('HeaderController', function HeaderController ($scope, $location, $http) {
 
     $("#message").hide();
     $("#notification").hide();
	   
$scope.logout = function() {
		  $http({
				method : "get",
				url : "/logout"
			}).then(function mySuccess(response) {
				$scope.myWelcome = response.data;
				alert("successfully logout");
				$location.url('/login');
			}, function myError(response) {
				$scope.myWelcome = response.statusText;
				alert($scope.myWelcome);
			});
}
 
 $scope.register = function() {
		 $location.url('/register');
    }

	
	 
 $scope.searchpage = function() {
		 $location.url('/search');
    }
	

});
