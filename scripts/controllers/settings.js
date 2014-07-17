'use strict';

/**
 * @ngdoc function
 * @name stackApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the stackApp
 */
angular.module('stackApp')
  .controller('SettingsCtrl', function ($scope, Authentication) {
    $scope.stack = Authentication.getUser();

  });
