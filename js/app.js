var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: '../views/home.html'
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
