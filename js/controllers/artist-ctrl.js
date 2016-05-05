// NOTE: nbApp is defined in app.js
nbApp.controller('artistController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Images are shown below. Select one to see the image.';
      $scope.selectedProject = null;
      $scope.title = 'Artist Projects';

      var rootPath = '../content/roles/artist/WR/';
      var tRootPath = '../content/roles/artist/T/';
      // {"name": "", "filepath": "", "t_filepath": ""},
      var artistImages = [
        {"name": "", "filepath": rootPath + "1.jpg", "t_filepath": tRootPath + "1.jpg"},
        {"name": "", "filepath": rootPath + "2.jpg", "t_filepath": tRootPath + "2.jpg"},
        {"name": "", "filepath": rootPath + "3.jpg", "t_filepath": tRootPath + "3.jpg"},
        {"name": "", "filepath": rootPath + "4.jpg", "t_filepath": tRootPath + "4.jpg"},
        {"name": "", "filepath": rootPath + "5.jpg", "t_filepath": tRootPath + "5.jpg"},
        {"name": "", "filepath": rootPath + "6.jpg", "t_filepath": tRootPath + "6.jpg"},
        {"name": "", "filepath": rootPath + "7.jpg", "t_filepath": tRootPath + "7.jpg"},
        {"name": "", "filepath": rootPath + "8.jpg", "t_filepath": tRootPath + "8.jpg"},
        {"name": "", "filepath": rootPath + "9.jpg", "t_filepath": tRootPath + "9.jpg"},
        {"name": "", "filepath": rootPath + "10.jpg", "t_filepath": tRootPath + "10.jpg"},
        {"name": "", "filepath": rootPath + "11.jpg", "t_filepath": tRootPath + "11.jpg"},
        {"name": "", "filepath": rootPath + "12.jpg", "t_filepath": tRootPath + "12.jpg"},
        {"name": "", "filepath": rootPath + "13.jpg", "t_filepath": tRootPath + "13.jpg"},
        {"name": "", "filepath": rootPath + "14.jpg", "t_filepath": tRootPath + "14.jpg"},
        {"name": "", "filepath": rootPath + "15.jpg", "t_filepath": tRootPath + "15.jpg"},
        {"name": "", "filepath": rootPath + "16.jpg", "t_filepath": tRootPath + "16.jpg"},
        {"name": "", "filepath": rootPath + "17.jpg", "t_filepath": tRootPath + "17.jpg"},
        {"name": "", "filepath": rootPath + "18.jpg", "t_filepath": tRootPath + "18.jpg"},
        {"name": "", "filepath": rootPath + "19.jpg", "t_filepath": tRootPath + "19.jpg"},
        {"name": "", "filepath": rootPath + "20.jpg", "t_filepath": tRootPath + "20.jpg"},
      ];

      $scope.images = artistImages;

      $scope.selectImage = function(image) {
          $scope.selectedImage = image;
      };

      /*
       * Skills and projects
       */

      $scope.skills = [
        {"name": "Charcoal", "size": 1},
        {"name": "Oil Pastel", "size": 1},
        {"name": "Graphite", "size": 1},
        {"name": "Pencil", "size": 1},
      ];

      $scope.projectCount = artistImages.length;

    }]);
