angular.module('khoziApp')
.controller('productCtrl',['$scope','$http','$stateParams','login',function($scope,$http,$stateParams,login) {
  console.log('productCtrl');
  var ctrl = this
  ctrl.profileId = $stateParams.profileId
  ctrl.productList = []
  if(ctrl.profileId) {
    ctrl.previewMode = true
    login.getProductsByOwnerId(ctrl.profileId).then((data) => {
      console.log("product",data)
      ctrl.productList = data.data
    })
  } else {
    login.getProducts().then((data) => {
      console.log("product",data)
      ctrl.productList = data.data
    })
  }

}]);
