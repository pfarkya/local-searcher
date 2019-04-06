angular.module('khoziApp')
.controller('productdetailCtrl',['$scope','$http','$state','$stateParams','login',function($scope,$http,$state,$stateParams,login) {
  console.log('productdetailCtrl');
  let ctrl = this
  ctrl.product = {}
  if($stateParams.product) {
    ctrl.product = Object.assign({}, $stateParams.product)
  }
  if(!ctrl.product.pictures) {
    ctrl.product.pictures = [{}]
  }
  ctrl.product.pictures.forEach((ele,i) => {
    if(typeof ele != "object") {
      ctrl.product.pictures[i] = {}
    }
  })
}]);
