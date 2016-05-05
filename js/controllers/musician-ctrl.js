// NOTE: nbApp is defined in app.js
nbApp.controller('musicianController', ['$scope', '$http',
    function($scope, $http) {
      // {"name": "", "filepath": "", "t_filepath": ""},
      var musicProjects = [
      ];

      $scope.projects = musicProjects;

      $scope.selectProject = function(improjectage) {
          $scope.selectProject = project;
      };

      /*
       * Skills and projects
       */

      $scope.skills = [
        {"name": "Trumpet", "size": 1},
        {"name": "Cello", "size": 1}
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

      $scope.projectCount = musicProjects.length + 2 || 0; //Two insturments

    }]);
