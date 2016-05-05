// NOTE: nbApp is defined in app.js
nbApp.controller('graphicDesignerController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Images are shown below. Select one to see the image.';
      $scope.selectedProject = null;
      $scope.title = 'Graphic Designer Projects';

      var rootPath = '../content/roles/graphicDesigner/WR/';
      var tRootPath = '../content/roles/graphicDesigner/T/';
      // {"name": "", "filepath": "", "t_filepath": ""},
      var graphicDesignerImages = [
        {"name": "", "filepath": rootPath + "Logovfinal-mark-bw-1.jpg", "t_filepath": tRootPath + "Logovfinal-mark-bw-1.jpg"},
        {"name": "", "filepath": rootPath + "Logovfinal-mark-color-1.jpg", "t_filepath": tRootPath + "Logovfinal-mark-color-1.jpg"},
        {"name": "", "filepath": rootPath + "Logovfinal-mark-bw-2.jpg", "t_filepath": tRootPath + "Logovfinal-mark-bw-2.jpg"},
        {"name": "", "filepath": rootPath + "Logovfinal-mark-color-2.jpg", "t_filepath": tRootPath + "Logovfinal-mark-color-2.jpg"},
        {"name": "", "filepath": rootPath + "circle-final-1.jpg", "t_filepath": tRootPath + "circle-final-1.jpg"},
        {"name": "", "filepath": rootPath + "circle-final-2.jpg", "t_filepath": tRootPath + "circle-final-2.jpg"},
        {"name": "", "filepath": rootPath + "circle-final-s1-1.jpg", "t_filepath": tRootPath + "circle-final-s1-1.jpg"},
        {"name": "", "filepath": rootPath + "circle-final-s1-4.jpg", "t_filepath": tRootPath + "circle-final-s1-4.jpg"},
        {"name": "", "filepath": rootPath + "web_logo_spade-v1.jpg", "t_filepath": tRootPath + "web_logo_spade-v1.jpg"},
        {"name": "", "filepath": rootPath + "web_logo_spade-v2.jpg", "t_filepath": tRootPath + "web_logo_spade-v2.jpg"},
        {"name": "", "filepath": rootPath + "web_scorpion-alumni-network-logo_gray.jpg", "t_filepath": tRootPath + "web_scorpion-alumni-network-logo_gray.jpg"},
        {"name": "", "filepath": rootPath + "web_scorpion-alumni-network-logo_orange.jpg", "t_filepath": tRootPath + "web_scorpion-alumni-network-logo_orange.jpg"},
      ];

      $scope.images = graphicDesignerImages;

      $scope.selectImage = function(image) {
          $scope.selectedImage = image;
      };

    }]);
