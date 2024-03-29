'use strict';

angular.module('stackApp')
    .factory('Application', function Application() {

    var ready = false, registeredListeners = [];

    var callListeners = function()
    {
        for (var i = registeredListeners.length - 1; i >= 0; i--) {
            registeredListeners[i]();
        };
    }

    return {
        isReady: function()
        {
            return ready;
        },

        makeReady: function()
        {
            ready = true;

            callListeners();
        },

        registerListener: function(callback)
        {
            if(ready) callback();
            else      registeredListeners.push(callback);
        }
    }
  });
