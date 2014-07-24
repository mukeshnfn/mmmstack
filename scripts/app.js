'use strict';

angular
  .module('stackApp', [
    'ngRoute','ui.utils','ui.bootstrap','ngCookies'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/loading', {
        templateUrl: 'views/loading.html',
        controller: 'LoadingCtrl'
      })
      .when('/simulator', {
        templateUrl: 'views/simulator.html',
        controller: 'SimulatorCtrl'
      })
      .when('/scenarios', {
        templateUrl: 'views/scenarios.html',
        controller: 'ScenariosCtrl'
      })
      .when('/', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl'
      })
      .when('/signout', {
        controller: 'SignoutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function (Authentication, Application, $rootScope, $location, RouteFilter) {

    Authentication.requestUser().then(function() {
      Application.makeReady();
    });


    $rootScope.$on('$locationChangeStart', function(scope, next, current) {
      if($location.path() === '/loading') return;
      if(! Application.isReady())
      {
        $location.path('loading');
      }

      RouteFilter.run($location.path());
    })
  });
