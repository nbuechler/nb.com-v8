// NOTE: routerApp is defined in app.js
routerApp.directive("videoContainerDirective", function() {
    return {
        restrict : 'E',
        templateUrl : 'js/templates/video-container.html',
        scope: {videoPath: "@"},
        link: function(scope, element, attrs) {
          scope.videoPath = attrs.videoPath
        }
    };
});
