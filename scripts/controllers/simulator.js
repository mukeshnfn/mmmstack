'use strict';

/**
 * @ngdoc function
 * @name stackApp.controller:SimulatorctrlCtrl
 * @description
 * # SimulatorctrlCtrl
 * Controller of the stackApp
 */
angular.module('stackApp')
  .controller('SimulatorCtrl', function ($scope, Authentication, $location) {
      $scope.stack = Authentication.getUser();
      $scope.logout = function () {
        Authentication.logout();
        $location.path('/');
      };
  });
