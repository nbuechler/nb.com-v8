// NOTE: nbApp is defined in app.js
nbApp.directive("imageArtistContainerDirective", function() {
    return {
        restrict : 'E',
        templateUrl : 'js/templates/image-artist-container.html'
    };
});
nbApp.directive("imageSocialContainerDirective", function() {
    return {
        restrict : 'E',
        templateUrl : 'js/templates/image-social-container.html'
    };
});
