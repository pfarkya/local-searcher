angular.module('khoziApp')
.controller('profileCtrl',['$scope','$http','$state','login', '$stateParams',function($scope,$http,$state,login,$stateParams) {
  console.log('profileCtrl');
  let ctrl = this
  console.log("loading controller profileCtrl", $stateParams.profileId)
  ctrl.profileId = $stateParams.profileId
  if (ctrl.profileId) {
    ctrl.previewMode = true
    login.getProfileById(ctrl.profileId).then((data)=> {
      ctrl.user = data
      ctrl.editedUser = Object.assign({}, ctrl.user)
      console.log("complete userdetail");
    }, () => {
    })
    ctrl.user = {}
    ctrl.editedUser = Object.assign({}, ctrl.user)
    ctrl.editMode = false
  } else {
    ctrl.previewMode = false
    login.getProfile().then(()=> {
      ctrl.user = login.getUserDetail()
      ctrl.editedUser = Object.assign({}, ctrl.user)
      console.log("complete userdetail");
    }, () => {
    })
    ctrl.user = login.getUserDetail()
    ctrl.editedUser = Object.assign({}, ctrl.user)
    ctrl.editMode = false
  }
  ctrl.editProfile = function(){
    ctrl.editMode = true
  }
  ctrl.updateProfile = function(){
    ctrl.updateUser()

  }
  ctrl.cancelEditProfile = function(){
    ctrl.editMode = false
  }
  ctrl.updateUser = function() {
    console.log(ctrl.editedUser)
    $http({
       method : "PUT",
       url : "/updateProfile",
       headers: {
         'Content-Type': "application/json"
       },
       data : ctrl.editedUser
     }).then(function(response) {
       login.setUserDetail(response.data)
       Object.assign(ctrl.user, ctrl.editedUser)
       ctrl.editMode = false
       alert("updated successfully")
     }, function(response) {
       alert("updated failed")
       ctrl.editMode = false
     });
    }
}
])
