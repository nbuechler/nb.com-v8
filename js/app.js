var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            views: {
                '': { templateUrl: '../views/home.html' },
                'artist@home': { templateUrl: '../views/artist.html' },
                'social-scientist@home': { templateUrl: '../views/social-scientist.html' },
                'computer-programmer@home': { templateUrl: '../views/computer-programmer.html' },
                'natural-scientist@home': { templateUrl: '../views/natural-scientist.html' },
                'engineer@home': { templateUrl: '../views/engineer.html' },
            }
        })

        .state('artist', {
            url: '/artist',
            templateUrl: '../views/artist.html'
        })
        .state('social-scientist', {
            url: '/social-scientist',
            templateUrl: '../views/social-scientist.html'
        })
        .state('computer-programmer', {
            url: '/computer-programmer',
            templateUrl: '../views/computer-programmer.html'
        })
        .state('natural-scientist', {
            url: '/natural-scientist',
            templateUrl: '../views/natural-scientist.html'
        })
        .state('engineer', {
            url: '/engineer',
            templateUrl: '../views/engineer.html'
        })

});
