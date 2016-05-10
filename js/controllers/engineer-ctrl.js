// NOTE: nbApp is defined in app.js
nbApp.controller('engineerController', ['$scope', '$http',
    function($scope, $http) {
      // {"name": "", "description": "", "bkgd": "", "color": "", "link": ""},
      var allProjects = [
        {"name": "nb.io", "description": "nathanielbuechler.io project - for engineering ec2 instance",
        "bkgd": "engineeringBKGD", "color": "warning", "link": "nb.io"},
      ];


      $scope.projects = allProjects;

      $scope.selectProject = function(project) {
          $scope.selectProject = project;
      };

      /*
       * Skills and projects
       */

      $scope.skills = [
        {"name": "Engineering", "size": 1},
        {"name": "Critical Thinking", "size": 1},
        {"name": "Decision Making", "size": 1},
        {"name": "Time Management", "size": 1},
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
