angular.module('khoziApp')
.controller('searchPageCtrl',['$scope','$http','$state','login','$stateParams',function($scope,$http,$state,login,$stateParams) {
  let ctrl = this
  console.log('searchPageCtrl',$stateParams);
  $http({
     method : "GET",
     url : "/search?q="+ $stateParams.q
   }).then(function(response) {
     ctrl.profiles = response.data
   }, function(response) {
     alert("request failed")
   });
}])
