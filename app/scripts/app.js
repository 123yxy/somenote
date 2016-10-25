'use strict';

/**
 * @ngdoc overview
 * @name cookieApp
 * @description
 * # cookieApp
 *
 * Main module of the application.
 */
/*angular
  .module('cookieApp', [
    'ngCookies'
  ]);*/
angular
  .module('cookieApp', ["ui.router","ngCookies"]).controller('zd',['$scope','$http','$cookieStore',function ($scope,$http,$cookieStore) {
    var username=$cookieStore.get("username");
    var password=$cookieStore.get("password");
    $scope.updata={
      username:uesrname,
      password:password
    }

  }]).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider){
    $stateProvider.state('denglu',{
      url:'/denglu',
      templateUrl:'views/denglu.html',
      controller:'denglu'
    }).state('zhuce',{
      url:'/zhuce',
      templateUrl:'views/zhuce.html',
      controller:'zhuce'
    })
    $urlRouterProvider.when('','/denglu')
  }])
