angular.module('khoziApp')
.component('picScroller', {
  bindings: {
    pictures: '<'
  },
  controller: 'picScrollerCtrl',
  controllerAs: 'ctrl',
  templateUrl: '/components/picScroller/picScroller.html'
})
.controller('picScrollerCtrl',['$scope','$http','$state','$stateParams','login',function($scope,$http,$state,$stateParams,login) {
  var ctrl = this
  ctrl.count = 0;
  ctrl.next = function() {
    ctrl.count+=1
  }
  ctrl.prev = function() {
    ctrl.count-=1
  }
}]);
