'use strict';

/**
 * @ngdoc function
 * @name stackApp.controller:ScenariosCtrl
 * @description
 * # ScenariosCtrl
 * Controller of the stackApp
 */
angular.module('stackApp')
  .controller('ScenariosCtrl', function ($scope, Authentication, $location) {
      $scope.stack = Authentication.getUser();
      $scope.logout = function () {
        Authentication.logout();
        $location.path('/');
      };
  });
