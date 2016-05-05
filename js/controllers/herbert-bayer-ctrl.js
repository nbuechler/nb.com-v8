// NOTE: nbApp is defined in app.js
nbApp.controller('herbertBayerController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Herbert Bayer designed Architype Bayer-type based on an enthusiastic approach that focused upon creating a multiple disciplinary syntheses of ideas. Bayer sought to create a simplified semiotic typeface that unified clear communication.';
      $scope.selectedProject = null;
      $scope.title = 'Herbert Bayer Monograph';

      var rootPath = '../content/roles/graphicDesigner/WR/herbert-bayer/';
      var tRootPath = '../content/roles/graphicDesigner/T/herbert-bayer/';
      // {"name": "", "filepath": "", "t_filepath": ""},
      var herbertBayerImages = [
        {"name": "", "filepath": rootPath + "Monograph1.jpg", "t_filepath": tRootPath + "Monograph1.jpg"},
        {"name": "", "filepath": rootPath + "Monograph2.jpg", "t_filepath": tRootPath + "Monograph2.jpg"},
        {"name": "", "filepath": rootPath + "Monograph3.jpg", "t_filepath": tRootPath + "Monograph3.jpg"},
        {"name": "", "filepath": rootPath + "Monograph4.jpg", "t_filepath": tRootPath + "Monograph4.jpg"},
        {"name": "", "filepath": rootPath + "Monograph5.jpg", "t_filepath": tRootPath + "Monograph5.jpg"},
        {"name": "", "filepath": rootPath + "Monograph6.jpg", "t_filepath": tRootPath + "Monograph6.jpg"},
        {"name": "", "filepath": rootPath + "Monograph7.jpg", "t_filepath": tRootPath + "Monograph7.jpg"},
        {"name": "", "filepath": rootPath + "Monograph8.jpg", "t_filepath": tRootPath + "Monograph8.jpg"},
        {"name": "", "filepath": rootPath + "Monograph9.jpg", "t_filepath": tRootPath + "Monograph9.jpg"},
        {"name": "", "filepath": rootPath + "Monograph10.jpg", "t_filepath": tRootPath + "Monograph10.jpg"},
        {"name": "", "filepath": rootPath + "Monograph11.jpg", "t_filepath": tRootPath + "Monograph11.jpg"},
        {"name": "", "filepath": rootPath + "Monograph12.jpg", "t_filepath": tRootPath + "Monograph12.jpg"},
        {"name": "", "filepath": rootPath + "Monograph13.jpg", "t_filepath": tRootPath + "Monograph13.jpg"},
        {"name": "", "filepath": rootPath + "Monograph14.jpg", "t_filepath": tRootPath + "Monograph14.jpg"},
        {"name": "", "filepath": rootPath + "Monograph15.jpg", "t_filepath": tRootPath + "Monograph15.jpg"},
        {"name": "", "filepath": rootPath + "Monograph16.jpg", "t_filepath": tRootPath + "Monograph16.jpg"},
        {"name": "", "filepath": rootPath + "Monograph17.jpg", "t_filepath": tRootPath + "Monograph17.jpg"},
        {"name": "", "filepath": rootPath + "Monograph18.jpg", "t_filepath": tRootPath + "Monograph18.jpg"},
        {"name": "", "filepath": rootPath + "Monograph19.jpg", "t_filepath": tRootPath + "Monograph19.jpg"},
        {"name": "", "filepath": rootPath + "Monograph20.jpg", "t_filepath": tRootPath + "Monograph20.jpg"},
        {"name": "", "filepath": rootPath + "Monograph21.jpg", "t_filepath": tRootPath + "Monograph21.jpg"},
        {"name": "", "filepath": rootPath + "Monograph22.jpg", "t_filepath": tRootPath + "Monograph22.jpg"},
        {"name": "", "filepath": rootPath + "Monograph23.jpg", "t_filepath": tRootPath + "Monograph23.jpg"},
        {"name": "", "filepath": rootPath + "Monograph24.jpg", "t_filepath": tRootPath + "Monograph24.jpg"},
      ];

      $scope.images = herbertBayerImages;

      $scope.selectImage = function(image) {
          $scope.selectedImage = image;
      };

    }]);
