'use strict';


angular.module('stackApp')
  .controller('SigninCtrl', function ($scope,$http,$window, Authentication, RouteFilter, $location) {

      $scope.formData = {};
      $scope.loginUser = function() {
        var formData = $.param($scope.formData);
        Authentication.login(formData).then(function() {
          $scope.stack = Authentication.getUser();
          console.log($scope.stack);
          if(typeof $scope.stack.userID  == "undefined")
          {
            $scope.message = $scope.stack;
          }
          else
          {
            $location.path('/dashboard');
          }
        });
      };
});
