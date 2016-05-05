// NOTE: nbApp is defined in app.js
nbApp.directive("videoContainerDirective", function() {
    return {
        restrict : 'E',
        templateUrl : 'js/templates/video-container.html',
        scope: {
          videoPath: "@",
          color: "@",
          bkgd: "@"
        },
        link: function(scope, element, attrs) {
          scope.videoPath = attrs.videoPath;
          scope.color = attrs.color;
          scope.bkgd = attrs.bkgd;
        }
    };
});
