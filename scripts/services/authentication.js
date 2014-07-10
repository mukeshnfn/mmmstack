'use strict';

angular.module('stackApp')
  .factory('Authentication', function Authentication($q, $http, $timeout) {

    var authenticatedUser = null;
    return  {
        requestUser: function()
        {
            var deferred = $q.defer();
            $http.get('api/user.json').success(function(user)
            {
                if(user.SessionKey)
                    {
                      authenticatedUser = user;
                    }

                    deferred.resolve(authenticatedUser);

            }).error(function(error)
            {
                deferred.reject(error);
            });

            return deferred.promise;
        },
        logoutUser: function()
        {
          var apikey = '&apikey=Q6yO1lGelAEaP9cT/M3mbQ==';
          var SessionKey = authenticatedUser.SessionKey;
          var UserId = authenticatedUser.UserID;

            $http({
              method  : 'POST',
              url     : 'http://apps.impetusanalytics.com/mmmstackweb/Service1.asmx/Logout',
              data    : $.param($scope.formData)+apikey,
              headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
          }).success(function(user)
            {

            }).error(function(error)
            {
                console.log("please try again");
            });
            authenticatedUser = null;
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
            return authenticatedUser != null;
        },

        login: function(credentials)
        {
            var deferred = $q.defer();

            $http.post('/auth/login', credentials).success(function(user)
            {
                if(user)
                {
                    authenticatedUser = user;
                    deferred.resolve(user);
                }
                else
                {
                    deferred.reject('Given credentials are incorrect');
                }

            }).error(function(error)
            {
                deferred.reject(error);
            });

            return deferred.promise;
        },


        logout: function()
        {
            authenticatedUser = null;
        },

        isDeveloper: function()
        {
            return this.exists() && authenticatedUser.type == 'developer';
        }
    }
  });
