'use strict';

/**
 * @ngdoc function
 * @name stackApp.controller:SimulatorctrlCtrl
 * @description
 * # SimulatorctrlCtrl
 * Controller of the stackApp
 */
angular.module('stackApp')
  .controller('SimulatorCtrl', function ($scope, Application, Authentication, simulator, $location) {
      simulator.loadSimulator().then(function() {
        $scope.loaded = true;
        console.log("after");
        console.log(simulator.getSimulator());
      });
      $scope.sim = simulator.getSimulator();
      $scope.stack = Authentication.getUser();
      $scope.logout = function () {
        Authentication.logout();
        $location.path('/');
      };
  });
