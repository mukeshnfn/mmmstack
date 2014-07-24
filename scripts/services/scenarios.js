'use strict';

/**
 * @ngdoc service
 * @name stackApp.scenarios
 * @description
 * # scenarios
 * Factory in the stackApp.
 */
angular.module('stackApp')
  .factory('scenarios', function ($q, $http, $cookieStore, $cookies) {
    // Service logic
    // ...
    var scenario = null;
    return {
      loadScenario : function()
      {
          var deferred = $q.defer();
          var sessionCookie = $cookies.sessionKey;
          var apikey = '&apikey=Q6yO1lGelAEaP9cT/M3mbQ==';
          var projectID = '&ProjectID=590';
          console.log(sessionCookie);
          var sessionKey = '&sessionKey='+sessionCookie;
          $http({
            method  : 'POST',
            url     : 'http://apps.impetusanalytics.com/mmmstackweb/Service1.asmx/scenarios',
            data    : apikey+sessionKey+projectID,
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .success(function(scenarioData) {
              console.log(scenarioData);
              scenario = scenarioData;
              deferred.resolve(scenario);
          }).error(function(error)
            {
                deferred.reject(error);
          });
          return deferred.promise;
      },
      getScenario : function () {
        return scenario;
      }
    }
  });
