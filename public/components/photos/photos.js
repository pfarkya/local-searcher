
  angular.module('khoziApp')
  .controller('photosCtrl',['$scope','$http','$state','$stateParams','login',function($scope,$http,$state,$stateParams,login) {
    console.log('photosCtrl');
    let ctrl = this
    ctrl.viewMode = false
    ctrl.photos = {}
    if($stateParams.photos) {
      ctrl.photos = Object.assign({}, $stateParams.photos)
    }
    if(!ctrl.photos.photos) {
      ctrl.photos.photos = [{}]
    }
    ctrl.photos.photos.forEach((ele,i) => {
      if(typeof ele != "object") {
        ctrl.photos.photos[i] = {}
      }
    })
    console.log("stateParams are", $stateParams)
    ctrl.addMorePics = function() {
      ctrl.photos.photos.push({});
    }
	
	
	

    login.getProducts().then((data) => {
      console.log("photos:--->",data.data)
      ctrl.photos = data.data
    })
 
	
	
	ctrl.savePhotos = function() {

      login.addPhotos(ctrl.photos).then(
        (data) => {
          console.log("successfully saved");
          $state.go('khojiApp.profile.photos')
        }
      ).catch(
        (err) => {
          console.log("errored",err)
        }
      )

  }
	
	

  }]);
