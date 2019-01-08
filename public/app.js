'use strict';
/* all routes and config here only */
var khoziApp = angular.module('khoziApp', ['ngMaterial',
  'ngMessages',
  'ui.router',
  'mdPickers',
  'ngAvatar',
  'satellizer'
]).config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('khojiApp', {
        url: '/app',
        views: {
          "header": {
            templateUrl: "/components/commonHeader/commonHeader.html",
            controller: 'commonHeaderCtrl',
            controllerAs: 'ctrl'
          },
          "content@": {
            templateUrl: "/components/searchPage/searchPage.html"
          }/*,
          "footer": {
            templateUrl: "/home/templates/footer.html"
          }*/
        }
      })
      .state('khojiApp.login', {
        url: '/login',
        views: {
          "content@": {
            templateUrl: "/components/login/login.html",
            controller: 'loginCtrl',
            controllerAs: 'ctrl'
          }/*,
          "footer": {
            templateUrl: "/home/templates/footer.html"
          }*/
        }
      })
      .state('khojiApp.register', {
        url: '/register',
        views: {
          "content@": {
            templateUrl: "/components/register/register.html",
            controller: 'registerCtrl',
            controllerAs: 'ctrl'
          }/*,
          "footer": {
            templateUrl: "/home/templates/footer.html"
          }*/
        }
      })
      .state('khojiApp.createEnterprise', {
        url: '/createEnterprise',
        views: {
          "content@": {
            templateUrl: "/components/createEnterprise/createEnterprise.html",
            controller: 'createEnterpriseCtrl',
            controllerAs: 'ctrl'
          }/*,
          "footer": {
            templateUrl: "/home/templates/footer.html"
          }*/
        }
      })
      .state('khojiApp.enterprises', {
        url: '/enterprises',
        views: {
          "content@": {
            templateUrl: "/components/enterprises/enterprises.html",
            controller: 'enterprisesCtrl',
            controllerAs: 'ctrl'
          }/*,
          "footer": {
            templateUrl: "/home/templates/footer.html"
          }*/
        }
      })
      .state('khojiApp.enterprise', {
        url: '/enterprise/:enterpriseId',
        views: {
          "content@": {
            templateUrl: "/components/enterprise/enterprise.html",
            controller: 'registerCtrl',
            controllerAs: 'ctrl'
          }/*,
          "footer": {
            templateUrl: "/home/templates/footer.html"
          }*/
        }
      })
      .state('khojiApp.profile', {
        url: '/register',
        views: {
          "content@": {
            templateUrl: "/components/register/register.html",
            controller: 'registerCtrl',
            controllerAs: 'ctrl'
          }/*,
          "footer": {
            templateUrl: "/home/templates/footer.html"
          }*/
        }
      });
    }
  ]).controller('khoziAppCtrl',['$scope','$state','login',function($scope,$state,login) {
    login.checkSessionExist()
    console.log("loaded controller");
    console.log($scope);
    $state.go('khojiApp');
  }]);
