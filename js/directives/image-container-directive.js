// NOTE: routerApp is defined in app.js
routerApp.directive("imageContainerArtistDirective", function() {
    return {
        restrict : 'E',
        templateUrl : 'js/templates/image-artist-container.html'
    };
});
routerApp.directive("imageContainerSocialDirective", function() {
    return {
        restrict : 'E',
        templateUrl : 'js/templates/image-social-container.html'
    };
});
