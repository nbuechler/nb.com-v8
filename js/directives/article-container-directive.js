// NOTE: nbApp is defined in app.js
nbApp.directive("articleContainerDirective", function() {
    return {
        restrict : 'E',
        templateUrl : 'js/templates/article-container.html'
    };
});
// NOTE: this is used for engineering
nbApp.directive("engineerArticleContainerDirective", function() {
    return {
        restrict : 'E',
        templateUrl : 'js/templates/engineer-article-container.html'
    };
});
