// NOTE: routerApp is defined in app.js
routerApp.directive("imageArtistContainerDirective", function() {
    return {
        restrict : 'E',
        templateUrl : 'js/templates/image-artist-container.html'
    };
});
routerApp.directive("imageSocialContainerDirective", function() {
    return {
        restrict : 'E',
        templateUrl : 'js/templates/image-social-container.html'
    };
});
