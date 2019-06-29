angular.module('khoziApp')
.controller('producteditCtrl',['$scope','$http','$state','$stateParams','login',function($scope,$http,$state,$stateParams,login) {
  console.log('producteditCtrl');
  let ctrl = this
  ctrl.viewMode = true;;
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
  ctrl.editMode = function() {
    ctrl.viewMode = false
  }
  ctrl.saveProduct = function() {
    if ($stateParams.isAddProduct) {
      login.addProduct(ctrl.product).then(
        (data) => {
          console.log("successfully saved");
          $state.go('khojiApp.profile.product')
        }
      ).catch(
        (err) => {
          console.log("errored",err)
        }
      )
    } else {
      login.editProduct(ctrl.product).then(
        (data) => {
          console.log("successfully saved");
          $state.go('khojiApp.profile.product')
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
    ctrl.product.pictures.push({});
  }

}]);
