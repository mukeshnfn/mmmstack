'use strict';

angular.module('stackApp')
.run(function(RouteFilter, Authentication)
{
    RouteFilter.register('auth', ['/profile'], function()
    {
        return Authentication.exists();
    }, 'signin');
    RouteFilter.register('auth', ['/dashboard'], function()
    {
        return Authentication.exists();
    }, 'signin');

    RouteFilter.register('guest', ['/signin'], function()
    {
        return !Authentication.exists();
    }, '/');
    //
    // RouteFilter.register('developer', ['/settings'], function()
    // {
    //     return Authentication.isDeveloper();
    // }, '/');
});
