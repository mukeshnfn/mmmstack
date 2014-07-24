'use strict';

angular.module('stackApp')
.run(function(RouteFilter, Authentication)
{
    RouteFilter.register('auth', ['/simulator','/dashboard','/scenarios'], function()
    {
        return Authentication.exists();
    }, 'signin');

    // RouteFilter.register('auth', ['/'], function()
    // {
    //     return Authentication.exists();
    // }, '/dashboard');

    RouteFilter.register('guest', ['/signin'], function()
    {
        return !Authentication.exists();
    }, '/dashboard');

});
