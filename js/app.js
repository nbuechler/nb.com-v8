var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            views: {
                '': { templateUrl: '../views/home.html' },
                'artist@home': { templateUrl: '../views/intros/artist-intro.html' },
                'social-scientist@home': { templateUrl: '../views/intros/social-scientist-intro.html' },
                'computer-programmer@home': { templateUrl: '../views/intros/computer-programmer-intro.html' },
                'natural-scientist@home': { templateUrl: '../views/intros/natural-scientist-intro.html' },
                'engineer@home': { templateUrl: '../views/intros/engineer-intro.html' },
            }
        })

        .state('artist', {
            url: '/artist',
            views: {
                '': { templateUrl: '../views/artist.html' },
                'intro@artist': { templateUrl: '../views/intros/artist-intro.html' },
            }
        })
        .state('social-scientist', {
            url: '/social-scientist',
            views: {
                '': { templateUrl: '../views/social-scientist.html' },
                'intro@social-scientist': { templateUrl: '../views/intros/social-scientist-intro.html' },
            }
        })
        .state('computer-programmer', {
            url: '/computer-programmer',
            views: {
                '': { templateUrl: '../views/computer-programmer.html' },
                'intro@computer-programmer': { templateUrl: '../views/intros/computer-programmer-intro.html' },
            }
        })
        .state('natural-scientist', {
            url: '/natural-scientist',
            views: {
                '': { templateUrl: '../views/natural-scientist.html' },
                'intro@natural-scientist': { templateUrl: '../views/intros/natural-scientist-intro.html' },
            }
        })
        .state('engineer', {
            url: '/engineer',
            views: {
                '': { templateUrl: '../views/engineer.html' },
                'intro@engineer': { templateUrl: '../views/intros/engineer-intro.html' },
            }
        })

});
