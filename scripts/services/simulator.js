'use strict';

/**
 * @ngdoc service
 * @name stackApp.simulator
 * @description
 * # simulator
 * Factory in the stackApp.
 */
angular.module('stackApp')
  .factory('simulator', function simulator($q, $http, $cookieStore, $cookies) {
    // Service logic
    // ...
    var simulator = null;
    return {
      loadSimulator : function()
      {
          var deferred = $q.defer();
          var sessionCookie = $cookies.sessionKey;
          var apikey = '&apikey=Q6yO1lGelAEaP9cT/M3mbQ==';
          var projectID = '&ProjectID=590';
          var scenarioID = '&ScenarioID=-1';
          console.log(sessionCookie);
          var sessionKey = '&sessionKey='+sessionCookie;
          $http({
            method  : 'POST',
            url     : 'http://apps.impetusanalytics.com/mmmstackweb/Service1.asmx/LoadSimulator',
            data    : apikey+projectID+scenarioID+sessionKey,
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .success(function(simulatorData) {
              console.log(simulatorData);
              simulator = simulatorData;
              deferred.resolve(simulator);
              // return simulator;
          }).error(function(error)
            {
                deferred.reject(error);
          });
          return deferred.promise;
      },
      getSimulator : function () {
        return simulator;
      }
    }
  });
