
  angular.module('khoziApp')
  .controller('photosCtrl',['$scope','$http','$state','$stateParams','login',function($scope,$http,$state,$stateParams,login) {
    console.log('photosCtrl');
    let ctrl = this
    ctrl.viewMode = true
    ctrl.photos = {}
    if($stateParams.photos) {
      ctrl.photos = Object.assign({}, $stateParams.photos)
    }
    if(!ctrl.photos) {
      ctrl.photos = [{}]
    }
    ctrl.photos.forEach((ele,i) => {
      if(typeof ele != "object") {
        ctrl.photos[i] = {}
      }
    })
    console.log("stateParams are", $stateParams)
    ctrl.addMorePics = function() {
      ctrl.photos.push({});
    }

  }]);
