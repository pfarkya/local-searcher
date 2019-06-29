angular.module('khoziApp')
.controller('serviceeditCtrl',['$scope','$http','$state','$stateParams','login',function($scope,$http,$state,$stateParams,login) {
  console.log('serviceeditCtrl');
  let ctrl = this
  ctrl.viewMode = true;;
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
  ctrl.editMode = function() {
    ctrl.viewMode = false
  }
  ctrl.saveService = function() {
    if ($stateParams.isAddService) {
      login.addService(ctrl.service).then(
        (data) => {
          console.log("successfully saved");
          $state.go('khojiApp.profile.service')
        }
      ).catch(
        (err) => {
          console.log("errored",err)
        }
      )
    } else {
      login.editService(ctrl.service).then(
        (data) => {
          console.log("successfully saved");
          $state.go('khojiApp.profile.service')
        }
      ).catch(
        (err) => {
          console.log("errored",err)
        }
      )
    }
  }
  console.log("stateParams are", $stateParams)
  ctrl.addMorePics = function() {
    ctrl.service.pictures.push({});
  }

}]);
