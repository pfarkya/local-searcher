'use strict';

var foodMeApp = angular.module('foodMeApp', ['ngResource']);

foodMeApp.config(function($routeProvider) {

  $routeProvider.
    when('/login', {
      controller: 'LoginController',
      templateUrl: 'views/login.html'
    }).
	  when('/setting', {
        controller: 'SettingController',
        templateUrl: 'views/setting.html'
      }).	  
	  when('/', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
      }).
	  when('/search', {
        controller: 'SearchController',
        templateUrl: 'views/search.html'
      }).
      when('/checkout', {
        controller: 'CheckoutController',
        templateUrl: 'views/checkout.html'
      }).
	   when('/edit_profile', {
        controller: 'EditProfileController',
        templateUrl: 'views/edit_profile.html'
      }).
	  when('/profile', {
        controller: 'ProfileController',
        templateUrl: 'views/profile.html'
      }).
	  when('/edit_setting', {
        controller: 'Edit_SettingController',
        templateUrl: 'views/edit_setting.html'
      }).
	  when('/add_product_detail', {
        controller: 'AddProductDetailController',
        templateUrl: 'views/add_product_detail.html'
      }).
	  when('/edit_product_detail', {
        controller: 'EditProductDetailController',
        templateUrl: 'views/edit_product_detail.html'
      }).
	  when('/forgot_password', {
        controller: 'ForgotPasswordController',
        templateUrl: 'views/forgot_password.html'
      }).
      when('/thank-you', {
        controller: 'ThankYouController',
        templateUrl: 'views/thank-you.html'
      }).
      when('/register', {
        controller: 'RegisterController',
        templateUrl: 'views/register.html'
      }).
      when('/dummy', {
        templateUrl: 'views/dummy.html'
      }).
      when('/how-it-works', {
        templateUrl: 'views/how-it-works.html'
      }).
      when('/help', {
        templateUrl: 'views/help.html'
      });
});
