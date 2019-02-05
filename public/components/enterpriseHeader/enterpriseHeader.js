angular.module('khoziApp')
.controller('enterprisesCtrl',['$scope','$http','$state','login',function($scope,$http,$state,login) {
  console.log('enterprisesCtrl');
  let ctrl = this
  login.getEnterprises().then((res)=> {
    ctrl.enterpriseList = res.data
  })

  ctrl.createEnterprise= function() {
    $state.go("khojiApp.enterprises.create")
  }
  ctrl.gotoEnterprise = function(id) {
    $state.go("khojiApp.enterprise",{enterpriseId:id})
  }


}])
