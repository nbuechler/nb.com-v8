// NOTE: routerApp is defined in app.js
routerApp.directive("articleContainerDirective", function() {
    return {
        restrict : 'E',
        templateUrl : 'js/templates/article-container.html'
    };
});
