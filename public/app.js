'use strict';
/* all routes and config here only */
var khoziApp = angular.module('khoziApp', ['ngMaterial',
  'ngMessages',
  'ui.router',
  'mdPickers',
  'ngAvatar',
  'satellizer',
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
            templateUrl: "/components/home/home.html"
          },
          "sidenav": {
            templateUrl: "/components/sidenav/sidenav.html",
            controller: 'sidenavCtrl'
          }
          /*,
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
          }
        }
      })
      .state('khojiApp.searchPage', {
        url: '/searchPage',
        views: {
          "content@": {
            templateUrl: "/components/searchPage/searchPage.html",
            controller: 'searchPageCtrl',
            controllerAs: 'ctrl'
          }
        },
        params: {
          q: undefined
        }
      })
      .state('khojiApp.register', {
        url: '/register',
        views: {
          "content@": {
            templateUrl: "/components/register/register.html",
            controller: 'registerCtrl',
            controllerAs: 'ctrl'
          }
        }
      })
      .state('khojiApp.createEnterprise', {
        url: '/createEnterprise',
        views: {
          "content@": {
            templateUrl: "/components/createEnterprise/createEnterprise.html",
            controller: 'createEnterpriseCtrl',
            controllerAs: 'ctrl'
          }
        }
      })
      .state('khojiApp.enterprises', {
        url: '/enterprises',
        views: {
          "content@": {
            templateUrl: "/components/enterprises/enterprises.html",
            controller: 'enterprisesCtrl',
            controllerAs: 'ctrl'
          }
        }
      })
      .state('khojiApp.enterprises.create', {
        url: '/create',
        views: {
          "content@": {
            templateUrl: "/components/createEnterprise/createEnterprise.html",
            controller: 'createEnterpriseCtrl',
            controllerAs: 'ctrl'
          }
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
          }
        }
      })
      .state('khojiApp.profileview', {
        url: '/profileview/:profileId',
        views: {
          "content@": {
            templateUrl: "/components/profile/profile.html",
            controller: 'profileCtrl',
            controllerAs: 'ctrl'
          }
        }
      })
      .state('khojiApp.product', {
        url: '/product',
        views: {
          "content@": {
            templateUrl: "/components/product/product.html",
            controller: 'productCtrl',
            controllerAs: 'ctrl'
          }
        }
      })
      .state('khojiApp.productedit', {
        url: '/productedit',
        views: {
          "content@": {
            templateUrl: "/components/productedit/productedit.html",
            controller: 'producteditCtrl',
            controllerAs: 'ctrl'
          }
        },params: {
          product: undefined,
          isAddProduct: false
        }
      })
      .state('khojiApp.productdetail', {
        url: '/productdetail',
        views: {
          "content@": {
            templateUrl: "/components/productdetail/productdetail.html",
          }
        },
        params: {
          product: {}
        }
      })
      .state('khojiApp.profile.product', {
        url: '/product',
        views: {
          "profileTabs@khojiApp.profile": {
            templateUrl: "/components/product/product.html",
            controller: 'productCtrl',
            controllerAs: 'ctrl'
          }
        }
      })
      .state('khojiApp.profile.service', {
              url: '/service',
              views: {
                "profileTabs@khojiApp.profile": {
                  templateUrl: "/components/service/service.html",
                  controller: 'serviceCtrl',
                  controllerAs: 'ctrl'
                }
              }
            })
      .state('khojiApp.profile.about', {
              url: '/about',
              views: {
                "profileTabs@khojiApp.profile": {
                  templateUrl: "/components/about/about.html",
                  controller: 'aboutCtrl',
                  controllerAs: 'ctrl'
                }
              }
            })
      .state('khojiApp.profile.photos', {
              url: '/photos',
              views: {
                "profileTabs@khojiApp.profile": {
                  templateUrl: "/components/photos/photos.html",
                }
              }
            })
      .state('khojiApp.profileview.product', {
        url: '/product',
        views: {
          "profileTabs@khojiApp.profileview": {
            templateUrl: "/components/product/product.html",
            controller: 'productCtrl',
            controllerAs: 'ctrl'
          }
        }
      })
      .state('khojiApp.profileview.service', {
              url: '/service',
              views: {
                "profileTabs@khojiApp.profileview": {
                  templateUrl: "/components/service/service.html",
                  controller: 'serviceCtrl',
                  controllerAs: 'ctrl'
                }
              }
            })
      .state('khojiApp.profileview.about', {
              url: '/about',
              views: {
                "profileTabs@khojiApp.profileview": {
                  templateUrl: "/components/about/about.html",
                  controller: 'aboutCtrl',
                  controllerAs: 'ctrl'
                }
              }
            })
      .state('khojiApp.profileview.photos', {
              url: '/photos',
              views: {
                "profileTabs@khojiApp.profileview": {
                  templateUrl: "/components/photos/photos.html",
                }
              }
            })
      .state('khojiApp.setting', {
              url: '/setting',
              views: {
                "content@": {
                  templateUrl: "/components/setting/setting.html",
                  controller: 'settingCtrl',
                  controllerAs: 'ctrl'
                }
              }
            });
    }
  ]).controller('khoziAppCtrl',['$scope','$state','login','$mdSidenav', function($scope,$state,login,$mdSidenav) {
    var ctrl = this;
    ctrl.isLogin = login.isLogin
    login.checkSessionExist().then(() => {
      if(login.isLogin()) {
        login.getProfile().then(()=> {
          // $state.go('khojiApp');
          ctrl.user = login.getUserDetail();
          console.log("complete userdetail");
        }, () => {
          $state.go('khojiApp.login');
          alert("unable to get detail")
        })
      } else {
        $state.go('khojiApp.login');
      }
    })

    console.log("loaded controller");
    console.log($scope);
    ctrl.toggleSidenav = buildToggler('closeEventsDisabled');

    function buildToggler(componentId) {
      return function() {
        console.log("run this function")
        $mdSidenav(componentId).toggle();
      };
    }

  }])
  .directive('appFilereader', function($q) {
    var slice = Array.prototype.slice;

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return;

                ngModel.$render = function() {};

                element.bind('change', function(e) {
                    var element = e.target;

                    $q.all(slice.call(element.files, 0).map(readFile))
                        .then(function(values) {
                            if (element.multiple) ngModel.$setViewValue(values);
                            else ngModel.$setViewValue(values.length ? values[0] : null);
                        });

                    function readFile(file) {
                        var deferred = $q.defer();

                        var reader = new FileReader();
                        reader.onload = function(mime_type,e) {
                            console.log("file loaded",{e,mime_type})
                            var source_img_obj = new Image();
                            source_img_obj.src = e.target.result
                            source_img_obj.onload = function() {
                               console.log('height: ' + this.naturalWidth);
                               console.log("Original W*H",{W:source_img_obj.naturalWidth,H:source_img_obj.naturalHeight})
                               var maxWidth = 1000;
                               var quality = 50
                               var natW = source_img_obj.naturalWidth;
                               var natH = source_img_obj.naturalHeight;
                               var ratio = natH / natW;
                               if (natW > maxWidth) {
                                   natW = maxWidth;
                                   natH = ratio * maxWidth;
                               }

                               var cvs = document.createElement('canvas');
                               cvs.width = natW;
                               cvs.height = natH;

                               var ctx = cvs.getContext("2d").drawImage(source_img_obj, 0, 0, natW, natH);
                               var newImageData = cvs.toDataURL(mime_type, quality/100);
                               var result_image_obj = new Image();
                               console.log("output data",newImageData)
                               result_image_obj.src = newImageData;

                               deferred.resolve(newImageData);
                            };

                        }.bind(reader,file.type);
                        reader.onerror = function(e) {
                            deferred.reject(e);
                        };
                        console.log(file)
                        reader.readAsDataURL(file);

                        return deferred.promise;
                    }

                }); //change

            } //link
    }; //return
});
