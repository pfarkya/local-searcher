angular.module('khoziApp')
.controller('aboutCtrl',['$scope','$http','$state','login','$stateParams',function($scope,$http,$state,login,$stateParams) {
  console.log('aboutCtrl loaded');
  let ctrl = this
  ctrl.profileId = $stateParams.profileId
  if(ctrl.profileId) {
    ctrl.previewMode = true
    login.getProfileById(ctrl.profileId).then((data)=> {
      ctrl.user = data
      ctrl.editedUser = Object.assign({}, ctrl.user)
      console.log("complete userdetail");
    }, () => {
    })
    ctrl.user = {}
    ctrl.editedUser = Object.assign({}, ctrl.user)
  } else {
    login.getProfile().then(()=> {
      ctrl.user = login.getUserDetail()
      ctrl.editedUser = Object.assign({}, ctrl.user)
      console.log("complete userdetail");
    }, () => {
    })
    ctrl.user = login.getUserDetail()
    ctrl.editedUser = Object.assign({}, ctrl.user)
  }


}])
