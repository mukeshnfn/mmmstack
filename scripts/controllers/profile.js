'use strict';

angular.module('stackApp')
  .controller('ProfileCtrl', function ($scope, Authentication, RouteFilter) {
      console.log(Authentication.getUser());
      $scope.stack = Authentication.getUser();
      $scope.selectedTab = 1;
      $scope.canAccess = function(route)
      {
      return RouteFilter.canAccess(route);
      }
});
