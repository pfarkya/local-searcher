angular.module('khoziApp')
.controller('productCtrl',['$scope','$http','$state','login',function($scope,$http,$state,login) {
  console.log('productCtrl');
  var ctrl = this
  ctrl.productList = []
  login.getProducts().then((data) => {
    console.log("product",data)
    ctrl.productList = data.data
  })

}]);
