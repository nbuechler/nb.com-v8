// NOTE: routerApp is defined in app.js
routerApp.controller('painterController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Images are shown below. Select one to see the image.';
      $scope.selectedProject = null;
      $scope.title = 'Artist Projects';

      var rootPath = '../content/roles/painter/WR/';
      var tRootPath = '../content/roles/painter/T/';
      // {"name": "", "filepath": "", "t_filepath": ""},
      var painterImages = [
        {"name": "", "filepath": rootPath + "1.jpg", "t_filepath": tRootPath + "1.png"},
        {"name": "", "filepath": rootPath + "2.jpg", "t_filepath": tRootPath + "2.png"},
        {"name": "", "filepath": rootPath + "3.jpg", "t_filepath": tRootPath + "3.png"},
        {"name": "", "filepath": rootPath + "4.jpg", "t_filepath": tRootPath + "4.png"},
        {"name": "", "filepath": rootPath + "5.jpg", "t_filepath": tRootPath + "5.png"},
        {"name": "", "filepath": rootPath + "6.jpg", "t_filepath": tRootPath + "6.png"},
        {"name": "", "filepath": rootPath + "7.jpg", "t_filepath": tRootPath + "7.png"},
        {"name": "", "filepath": rootPath + "8.jpg", "t_filepath": tRootPath + "8.png"},
        {"name": "", "filepath": rootPath + "9.jpg", "t_filepath": tRootPath + "9.png"},
        {"name": "", "filepath": rootPath + "10.jpg", "t_filepath": tRootPath + "10.png"},
        {"name": "", "filepath": rootPath + "11.jpg", "t_filepath": tRootPath + "11.png"},
        {"name": "", "filepath": rootPath + "12.jpg", "t_filepath": tRootPath + "12.png"},
        {"name": "", "filepath": rootPath + "13.jpg", "t_filepath": tRootPath + "13.png"},
        {"name": "", "filepath": rootPath + "14.jpg", "t_filepath": tRootPath + "14.png"},
        {"name": "", "filepath": rootPath + "15.jpg", "t_filepath": tRootPath + "15.png"},
        {"name": "", "filepath": rootPath + "16.jpg", "t_filepath": tRootPath + "16.png"},
        {"name": "", "filepath": rootPath + "17.jpg", "t_filepath": tRootPath + "17.png"},
      ];

      $scope.images = painterImages;

      $scope.selectImage = function(image) {
          $scope.selectedImage = image;
      };

    }]);
