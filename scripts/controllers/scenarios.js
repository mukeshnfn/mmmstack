'use strict';

angular.module('stackApp')
  .controller('ScenariosCtrl', function ($scope, Authentication, $location, scenarios) {
        scenarios.loadScenario().then(function() {
          $scope.loaded = true;
          $scope.load = "Load";
          $scope.scenarios = scenarios.getScenario();
        });
        $scope.stack = Authentication.getUser();
        $scope.logout = function () {
          Authentication.logout();
          $location.path('/');
      };
});
