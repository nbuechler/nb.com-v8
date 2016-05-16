// NOTE: nbApp is defined in app.js
nbApp.controller('botanistController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Images are shown below. Select one to see the image.';
      $scope.selectedProject = null;
      $scope.title = 'Botanist Projects';

      // {"name": "", "filepath": "", "t_filepath": ""},
      var allProjects = [
      ];

      $scope.projects = allProjects;

      $scope.selectProject = function(improjectage) {
          $scope.selectProject = project;
      };

      var rootPath = '../content/roles/botanist/WR/';
      var tRootPath = '../content/roles/botanist/T/';
      // {"name": "", "filepath": "", "t_filepath": ""},
      var botanistImages = [
        {"name": "", "filepath": rootPath + "01.jpg", "t_filepath": tRootPath + "01-T.jpg"},
        {"name": "", "filepath": rootPath + "02.jpg", "t_filepath": tRootPath + "02-T.jpg"},
        {"name": "", "filepath": rootPath + "03.jpg", "t_filepath": tRootPath + "03-T.jpg"},
        {"name": "", "filepath": rootPath + "04.jpg", "t_filepath": tRootPath + "04-T.jpg"},
        {"name": "", "filepath": rootPath + "05.jpg", "t_filepath": tRootPath + "05-T.jpg"},
        {"name": "", "filepath": rootPath + "06.jpg", "t_filepath": tRootPath + "06-T.jpg"},
        {"name": "", "filepath": rootPath + "07.jpg", "t_filepath": tRootPath + "07-T.jpg"},
        {"name": "", "filepath": rootPath + "08.jpg", "t_filepath": tRootPath + "08-T.jpg"},
        {"name": "", "filepath": rootPath + "09.jpg", "t_filepath": tRootPath + "09-T.jpg"},
        {"name": "", "filepath": rootPath + "10.jpg", "t_filepath": tRootPath + "10-T.jpg"},
      ]

      $scope.images = botanistImages;

      $scope.selectImage = function(image) {
          $scope.selectedImage = image;
      };

      /*
       * Skills and projects
       */

      $scope.skills = [
				{"name": "Sciencing", "size": 1},
      ];

      var skillString = "";

      for (var i = 0; i < $scope.skills.length; i++) {
        if($scope.skills.length - 1 == i){
          skillString += $scope.skills[i].name;
        } else {
          skillString += $scope.skills[i].name + ', ';
        }
      };

      $scope.skillString = skillString;

      $scope.projectCount = allProjects.length || 0; //Two insturments

    }]);
