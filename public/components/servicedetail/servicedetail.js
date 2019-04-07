angular.module('khoziApp')
.controller('servicedetailCtrl',['$scope','$http','$state','$stateParams','login',function($scope,$http,$state,$stateParams,login) {
  console.log('servicedetailCtrl');
  let ctrl = this
  ctrl.service = {}
  if($stateParams.service) {
    ctrl.service = Object.assign({}, $stateParams.service)
  }
  if(!ctrl.service.pictures) {
    ctrl.service.pictures = [{}]
  }
  ctrl.service.pictures.forEach((ele,i) => {
    if(typeof ele != "object") {
      ctrl.service.pictures[i] = {}
    }
  })
}]);
