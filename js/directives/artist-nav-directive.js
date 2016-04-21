// NOTE: routerApp is defined in app.js
routerApp.directive("artistNavDirective", function() {
    return {
        restrict : 'E',
        templateUrl : 'js/templates/artist-nav.html'
    };
});
