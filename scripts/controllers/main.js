'use strict';

angular.module('stackApp')
  .controller('MainCtrl', function ($scope, Authentication, RouteFilter, $location) {
        $scope.stack = Authentication.getUser();
        $scope.selectedTab = 1;
        $scope.canAccess = function(route)
        {
        return RouteFilter.canAccess(route);
        }
        $scope.logout = function () {
          Authentication.logout();
          $location.path('/');
        };
})
  .controller('allProjectsCtrl', function ($scope, Authentication, RouteFilter) {
          $scope.recentProjects = Authentication.recentProject();
          $scope.projects = Authentication.allProject();
          $scope.Projects = $scope.projects[0];
          $scope.tabs = [{title:"Dynamic Title 1",content:"Dynamic content 1" },{ title:"Dynamic Title 2", content:"Dynamic content 2",disabled: true }];
});
