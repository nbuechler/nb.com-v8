// NOTE: routerApp is defined in app.js
routerApp.controller('artistController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Images are listed below. Select one see the image.';
      $scope.selectedProject = null;
      $scope.title = 'Artist Projects';

      var rootPath = '../content/roles/artist/WR/';
      var TrootPath = '../content/roles/artist/T/';
      // {"name": "", "filepath": "", "t-filepath": ""},
      var artistImages = [
        {"name": "", rootPath + "filepath": "1.jpg", "t-filepath": tRootPath + "1.jpg"},
        {"name": "", rootPath + "filepath": "2.jpg", "t-filepath": tRootPath + "2.jpg"},
        {"name": "", rootPath + "filepath": "3.jpg", "t-filepath": tRootPath + "3.jpg"},
        {"name": "", rootPath + "filepath": "4.jpg", "t-filepath": tRootPath + "4.jpg"},
        {"name": "", rootPath + "filepath": "5.jpg", "t-filepath": tRootPath + "5.jpg"},
        {"name": "", rootPath + "filepath": "6.jpg", "t-filepath": tRootPath + "6.jpg"},
        {"name": "", rootPath + "filepath": "7.jpg", "t-filepath": tRootPath + "7.jpg"},
        {"name": "", rootPath + "filepath": "8.jpg", "t-filepath": tRootPath + "8.jpg"},
        {"name": "", rootPath + "filepath": "9.jpg", "t-filepath": tRootPath + "9.jpg"},
        {"name": "", rootPath + "filepath": "10.jpg", "t-filepath": tRootPath + "10.jpg"},
        {"name": "", rootPath + "filepath": "11.jpg", "t-filepath": tRootPath + "11.jpg"},
        {"name": "", rootPath + "filepath": "12.jpg", "t-filepath": tRootPath + "12.jpg"},
        {"name": "", rootPath + "filepath": "13.jpg", "t-filepath": tRootPath + "13.jpg"},
        {"name": "", rootPath + "filepath": "14.jpg", "t-filepath": tRootPath + "14.jpg"},
        {"name": "", rootPath + "filepath": "15.jpg", "t-filepath": tRootPath + "15.jpg"},
        {"name": "", rootPath + "filepath": "16.jpg", "t-filepath": tRootPath + "16.jpg"},
        {"name": "", rootPath + "filepath": "17.jpg", "t-filepath": tRootPath + "17.jpg"},
        {"name": "", rootPath + "filepath": "18.jpg", "t-filepath": tRootPath + "18.jpg"},
        {"name": "", rootPath + "filepath": "19.jpg", "t-filepath": tRootPath + "19.jpg"},
        {"name": "", rootPath + "filepath": "20.jpg", "t-filepath": tRootPath + "20.jpg"},

      ];

      $scope.images = artistImages;

      $scope.selectProject = function(image) {
          $scope.selectedImage = image;
      };

    }]);
