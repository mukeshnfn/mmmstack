'use strict';

/**
 * @ngdoc function
 * @name stackApp.controller:SignoutCtrl
 * @description
 * # SignoutCtrl
 * Controller of the stackApp
 */
angular.module('stackApp')
  .controller('SignoutCtrl', function ($scope, Authentication, $window) {
      return Authentication.logout();
      $window.location='#/simulator';
});
