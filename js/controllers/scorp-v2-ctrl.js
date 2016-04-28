// NOTE: routerApp is defined in app.js
routerApp.controller('scorpV2Controller', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'This is a cumulative summary of many different ideas and concepts. It shows one can do more with the help of others. This is version two of Scorpion Success, named after the high school mascot of its students.';
      $scope.selectedProject = null;
      $scope.title = 'Scorpion Success Version 2';

      var rootPath = '../content/roles/socialActivist/scorpionSuccess/WR/Version02/';
      var tRootPath = '../content/roles/socialActivist/scorpionSuccess/T/Version02/';
      // {"name": "", "filepath": "", "t_filepath": ""},
      var scorp2Images = [
        {"name": "", "filepath": rootPath + "22.jpg", "t_filepath": tRootPath + "22.jpg"},
        {"name": "", "filepath": rootPath + "23.jpg", "t_filepath": tRootPath + "23.jpg"},
        {"name": "", "filepath": rootPath + "24.jpg", "t_filepath": tRootPath + "24.jpg"},
        {"name": "", "filepath": rootPath + "25.jpg", "t_filepath": tRootPath + "25.jpg"},
        {"name": "", "filepath": rootPath + "26.jpg", "t_filepath": tRootPath + "26.jpg"},
        {"name": "", "filepath": rootPath + "27.jpg", "t_filepath": tRootPath + "27.jpg"},
        {"name": "", "filepath": rootPath + "28.jpg", "t_filepath": tRootPath + "28.jpg"},
        {"name": "", "filepath": rootPath + "29.jpg", "t_filepath": tRootPath + "29.jpg"},
        {"name": "", "filepath": rootPath + "30.jpg", "t_filepath": tRootPath + "30.jpg"},
        {"name": "", "filepath": rootPath + "31.jpg", "t_filepath": tRootPath + "31.jpg"},
        {"name": "", "filepath": rootPath + "32.jpg", "t_filepath": tRootPath + "32.jpg"},
        {"name": "", "filepath": rootPath + "33.jpg", "t_filepath": tRootPath + "33.jpg"},
        {"name": "", "filepath": rootPath + "34.jpg", "t_filepath": tRootPath + "34.jpg"},
        {"name": "", "filepath": rootPath + "35.jpg", "t_filepath": tRootPath + "35.jpg"},
        {"name": "", "filepath": rootPath + "36.jpg", "t_filepath": tRootPath + "36.jpg"},
        {"name": "", "filepath": rootPath + "37.jpg", "t_filepath": tRootPath + "37.jpg"},
        {"name": "", "filepath": rootPath + "38.jpg", "t_filepath": tRootPath + "38.jpg"},
      ];

      $scope.images = scorp2Images;

      $scope.selectImage = function(image) {
          $scope.selectedImage = image;
      };

    }]);
