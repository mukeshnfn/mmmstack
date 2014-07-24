'use strict';

angular.module('stackApp')
  .controller('ScenariosCtrl', function ($scope, Authentication, $location) {
        $scope.stack = Authentication.getUser();
        $scope.logout = function () {
          Authentication.logout();
          $location.path('/');
      };
});
