// NOTE: routerApp is defined in app.js
routerApp.controller('scorpV1Controller', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'This is a cumulative summary of many different ideas and concepts. It shows one can do more with the help of others. This is version one of Scorpion Success, named after the high school mascot of its students. ';
      $scope.selectedProject = null;
      $scope.title = 'Scorpion Success Version 1';

      var rootPath = '../content/roles/socialActivist/scorpionSuccess/WR/Version01/';
      var tRootPath = '../content/roles/socialActivist/scorpionSuccess/T/Version01/';
      // {"name": "", "filepath": "", "t_filepath": ""},
      var scorp1Images = [
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

      $scope.images = scorp1Images;

      $scope.selectImage = function(image) {
          $scope.selectedImage = image;
      };

    }]);
