angular.module('khoziApp')
.controller('serviceCtrl',['$scope','$http','$stateParams','login',function($scope,$http,$stateParams,login) {
  console.log('serviceCtrl');
  var ctrl = this
  ctrl.profileId = $stateParams.profileId
  ctrl.serviceList = []
  if(ctrl.profileId) {
    ctrl.previewMode = true
    login.getServicesByOwnerId(ctrl.profileId).then((data) => {
      console.log("service",data)
      ctrl.serviceList = data.data
    })
  } else {
    login.getServices().then((data) => {
      console.log("service",data)
      ctrl.serviceList = data.data
    })
  }

}]);
