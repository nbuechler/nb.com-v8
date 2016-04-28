var routerApp = angular.module('routerApp', ['ui.router', 'ngMaterial']);

routerApp.config(function($stateProvider, $urlRouterProvider, $sceProvider) {

    $sceProvider.enabled(false); // Injection might be possible!!
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

        /*
        Artist Section
        */
        .state('artist', {
            url: '/artist',
            views: {
                '': { templateUrl: '../views/artist.html' },
                'intro@artist': { templateUrl: '../views/intros/artist-intro.html' },
            }
        })
        .state('musician', {
            url: '/musician',
            views: {
                '': { templateUrl: '../views/musician.html' },
            }
        })
        .state('painter', {
            url: '/painter',
            views: {
                '': { templateUrl: '../views/painter.html' },
            }
        })
        .state('photographer', {
            url: '/photographer',
            views: {
                '': { templateUrl: '../views/photographer.html' },
            }
        })
        .state('graphic-designer', {
            url: '/graphic-designer',
            views: {
                '': { templateUrl: '../views/graphic-designer.html' },
            }
        })
        .state('sound-designer', {
            url: '/sound-designer',
            views: {
                '': { templateUrl: '../views/sound-designer.html' },
            }
        })

        /*
        Social Scientist Section
        */
        .state('social-scientist', {
            url: '/social-scientist',
            views: {
                '': { templateUrl: '../views/social-scientist.html' },
                'intro@social-scientist': { templateUrl: '../views/intros/social-scientist-intro.html' },
            }
        })
        .state('journalist', {
            url: '/journalist',
            views: {
                '': { templateUrl: '../views/journalist.html' },
            }
        })
        .state('world-historian', {
            url: '/world-historian',
            views: {
                '': { templateUrl: '../views/world-historian.html' },
            }
        })
        .state('political-economist', {
            url: '/political-economist',
            views: {
                '': { templateUrl: '../views/political-economist.html' },
            }
        })
        .state('social-activist', {
            url: '/social-activist',
            views: {
                '': { templateUrl: '../views/social-activist.html' },
            }
        })
        .state('comparative-institutionalist', {
            url: '/comparative-institutionalist',
            views: {
                '': { templateUrl: '../views/comparative-institutionalist.html' },
            }
        })
        .state('cultural-anthropologist', {
            url: '/cultural-anthropologist',
            views: {
                '': { templateUrl: '../views/cultural-anthropologist.html' },
            }
        })

        /*
        Computer Programmer Section
        */
        .state('computer-programmer', {
            url: '/computer-programmer',
            views: {
                '': { templateUrl: '../views/computer-programmer.html' },
                'intro@computer-programmer': { templateUrl: '../views/intros/computer-programmer-intro.html' },
            }
        })
        .state('back-end-developer', {
            url: '/back-end-developer',
            views: {
                '': { templateUrl: '../views/back-end-developer.html' },
            }
        })
        .state('front-end-developer', {
            url: '/front-end-developer',
            views: {
                '': { templateUrl: '../views/front-end-developer.html' },
            }
        })

        /*
        Natural Scientist Section
        */
        .state('natural-scientist', {
            url: '/natural-scientist',
            views: {
                '': { templateUrl: '../views/natural-scientist.html' },
                'intro@natural-scientist': { templateUrl: '../views/intros/natural-scientist-intro.html' },
            }
        })

        /*
        Engineer Section
        */
        .state('engineer', {
            url: '/engineer',
            views: {
                '': { templateUrl: '../views/engineer.html' },
                'intro@engineer': { templateUrl: '../views/intros/engineer-intro.html' },
            }
        })

});
