var app = angular.module("limApp", ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'template/page/me.html',
                controller  : 'meController'
            })
            .when('/profile', {
                            templateUrl : 'template/page/profile.html'
                        })
            .when('/tags', {
                            templateUrl : 'template/page/tags.html'
            })
            .when('/followers', {
                            templateUrl : 'template/page/followers.html'
                        })
            .when('/following', {
                            templateUrl : 'template/page/following.html'
                        })
            .when('/media', {
                            templateUrl : 'template/page/media.html',
                            controller : 'mediaController'
                        })
    });