angular.module('khoziApp')
.controller('aboutCtrl',['$scope','$http','$state','login',function($scope,$http,$state,login) {
  console.log('profileCtrl');
  let ctrl = this
  login.getProfile().then(()=> {
    ctrl.user = login.getUserDetail()
    ctrl.editedUser = Object.assign({}, ctrl.user)
    console.log("complete userdetail");
  }, () => {
  })
  ctrl.user = login.getUserDetail()
  ctrl.editedUser = Object.assign({}, ctrl.user)
  
}])
