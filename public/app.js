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
      .state('khojiApp.enterprises.create', {
        url: '/create',
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
      .state('khojiApp.enterprise', {
        url: '/enterprise/:enterpriseId',
        views: {
          "content@": {
            templateUrl: "/components/enterprise/enterprise.html",
            controller: 'enterpriseCtrl',
            controllerAs: 'ctrl'
          },
          "enterpriseHeader@khojiApp.enterprise": {
            templateUrl: "/components/enterpriseHeader/enterpriseHeader.html"
          }
        },
        resolve:{
          enterpriseId: ['$stateParams', function($stateParams){
              return $stateParams.enterpriseId;
          }]
        }
      })
      .state('khojiApp.enterprise.profile', {
        url: '/profile',
        views: {
          "enterpriseContent@khojiApp.enterprise": {
            templateUrl: "/components/enterpriseProfile/enterpriseProfile.html"
          }
        }
      })
      .state('khojiApp.enterprise.products', {
        url: '/products',
        views: {
          "enterpriseContent@khojiApp.enterprise": {
            templateUrl: "/components/productList/productList.html"
          }
        }
      })
      .state('khojiApp.enterprise.createProduct', {
        url: '/products/create',
        views: {
          "enterpriseContent@khojiApp.enterprise": {
            templateUrl: "/components/createProduct/createProduct.html"
          }
        }
      })
      .state('khojiApp.enterprise.editProduct', {
        url: '/products/:productId/edit',
        views: {
          "enterpriseContent@khojiApp.enterprise": {
            templateUrl: "/components/editProduct/editProduct.html"
          }
        }
      })
      .state('khojiApp.enterprise.viewProduct', {
        url: '/products/:productId/view',
        views: {
          "enterpriseContent@khojiApp.enterprise": {
            templateUrl: "/components/viewProduct/viewProduct.html"
          }
        }
      })
      .state('khojiApp.profile', {
        url: '/profile',
        views: {
          "content@": {
            templateUrl: "/components/profile/profile.html",
            controller: 'profileCtrl',
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
    if(login.isLogin()) {
      login.getProfile().then(()=> {
        $state.go('khojiApp');
        console.log("complete userdetail");
      }, () => {
        $state.go('khojiApp');
      })
    }
    console.log("loaded controller");
    console.log($scope);

  }]);