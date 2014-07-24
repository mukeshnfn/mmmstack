'use strict';

/**
 * @ngdoc service
 * @name stackApp.scenarios
 * @description
 * # scenarios
 * Factory in the stackApp.
 */
angular.module('stackApp')
  .factory('scenarios', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
