var app = angular.module("limApp", ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'template/page/me.html',
                controller  : 'homeController'
            })
            .when('/profile', {
                            templateUrl : 'template/page/profile.html',
                            controller  : 'homeController'
                        })
            .when('/tags', {
                templateUrl : 'template/page/tags.html',
                controller  : 'homeController'
            })
            .when('/followers', {
                            templateUrl : 'template/page/followers.html'
                        })
            .when('/following', {
                            templateUrl : 'template/page/following.html'
                        })
            .when('/images', {
                            templateUrl : 'template/page/images.html'
                        })
            .when('/videos', {
                            templateUrl : 'template/page/videos.html'
                        })
    });
