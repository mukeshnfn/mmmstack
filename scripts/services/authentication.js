'use strict';

angular.module('stackApp')
  .factory('Authentication', function Authentication($q, $http, $timeout, $rootScope) {

    var authenticatedUser = null;
    var user = null;
    return  {
        requestUser: function()
        {
            var deferred = $q.defer();
            user = authenticatedUser;
            deferred.resolve(user);
            return deferred.promise;
        },

        getUser: function()
        {
            return authenticatedUser;
        },

        recentProject: function()
        {
          return authenticatedUser.recent;
        },

        allProject: function()
        {
          return authenticatedUser.allProject;
        },

        exists: function()
        {
            return authenticatedUser;
        },

        login: function(formData)
        {
            var deferred = $q.defer();
            var apikey = '&apikey=Q6yO1lGelAEaP9cT/M3mbQ==';
            $http({
                  method  : 'POST',
                  url     : 'http://apps.impetusanalytics.com/mmmstackweb/Service1.asmx/Login',
                  data    : formData+apikey,
                  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
              })
                  .success(function(userData) {
                    authenticatedUser = userData;
                    deferred.resolve(user);
              });
              return deferred.promise;
        },


        logout: function()
        {
            var apikey = '&apikey=Q6yO1lGelAEaP9cT/M3mbQ==';
            var SessionKey = '&SessionKey='+authenticatedUser.SessionKey;
            var UserId = '&UserID='+authenticatedUser.userID;
              $http({
                method  : 'POST',
                url     : 'http://apps.impetusanalytics.com/mmmstackweb/Service1.asmx/Logout',
                data    : SessionKey+apikey+UserId,
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function(user)
              {
                authenticatedUser = null;
                console.log("Success");
              }).error(function(error)
              {
                console.log("please try again");
              });
        },

        isDeveloper: function()
        {
            return this.exists() && authenticatedUser.type == 'developer';
        }
    }
  });
