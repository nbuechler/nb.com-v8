// NOTE: nbApp is defined in app.js
nbApp.controller('hardwareEngineerController', ['$scope', '$http',
    function($scope, $http) {
      // {"name": "", "filepath": "", "t_filepath": ""},
      var allProjects = [
      ];

      $scope.projects = allProjects;

      $scope.selectProject = function(improjectage) {
          $scope.selectProject = project;
      };

      /*
       * Skills and projects
       */

      $scope.skills = [
        {"name": "Engineering", "size": 1},
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
