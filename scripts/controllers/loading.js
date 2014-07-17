'use strict';

angular.module('stackApp')
  .controller('LoadingCtrl', function ($scope, Application, $location) {

    Application.registerListener(function()
    {
        // When application is ready then redirect to the main page
        $location.path('/');
    });
  });
