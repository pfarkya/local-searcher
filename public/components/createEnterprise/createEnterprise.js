angular.module('khoziApp')
.controller('createEnterpriseCtrl',['$scope','$http','$state','login',function($scope,$http,$state,login) {
  console.log('createEnterpriseCtrl');
  let ctrl = this
  ctrl.registerEnterprise= function() {
    $http({
       method : "POST",
       url : "/add_enterprise",
       headers: {
         'Content-Type': "application/json"
       },
       data : ctrl.enterprise
     }).then(() => {
       $state.go("khojiApp.enterprises")
     })
  }



}])
