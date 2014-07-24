'use strict';

angular.module('stackApp')
  .factory('Authentication', function Authentication($q, $http, $timeout,$cookieStore, $cookies, $rootScope) {

    var authenticatedUser = null;
    var user = null;
    return  {
        requestUser: function()
        {
            if($cookies.sessionKey  !== "undefined")
            {
              var deferred = $q.defer();
              var sessionCookie = $cookies.sessionKey;
              console.log(sessionCookie);
              var apikey = '&apikey=Q6yO1lGelAEaP9cT/M3mbQ==';
              var sessionKey = '&sessionKey='+sessionCookie;
              $http({
                    method  : 'POST',
                    url     : 'http://apps.impetusanalytics.com/mmmstackweb/Service1.asmx/Dashboard',
                    data    : apikey+sessionKey,
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
                    .success(function(userData) {
                      authenticatedUser = userData;
                      console.log(authenticatedUser);
                      $cookieStore.put('sessionKey', authenticatedUser.sessionKey);
                      deferred.resolve(authenticatedUser);
                });
            }
            else
            {
              var deferred = $q.defer();
              console.log("No session key found!");
              deferred.resolve(authenticatedUser);
              // return deferred.promise;
            }
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
          if ($cookies.sessionKey) {
            return authenticatedUser;
          }
          else{
            return false;

          }
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
                    $cookieStore.put('sessionKey', authenticatedUser.sessionKey);
                    $cookies.sessionKey = authenticatedUser.sessionKey;
                    deferred.resolve(authenticatedUser);
              });
              return deferred.promise;
        },


        logout: function()
        {
            var apikey = '&apikey=Q6yO1lGelAEaP9cT/M3mbQ==';
            var SessionKey = '&SessionKey='+authenticatedUser.sessionKey;
            var UserId = '&UserID='+authenticatedUser.userID;
              $http({
                method  : 'POST',
                url     : 'http://apps.impetusanalytics.com/mmmstackweb/Service1.asmx/Logout',
                data    : SessionKey+apikey+UserId,
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function(user)
              {
                authenticatedUser = null;
                $cookieStore.remove('SessionKey');
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
