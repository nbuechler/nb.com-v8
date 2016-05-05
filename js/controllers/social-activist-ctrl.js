// NOTE: nbApp is defined in app.js
nbApp.controller('socialActivistController', ['$scope', '$http',
    function($scope, $http) {
      // {"name": "", "filepath": "", "t_filepath": ""},
      var socialActivistProjects = [
      ];

      $scope.projects = [];

      /*
       * Skills and projects
       */

      $scope.skills = [
        {"name": "Diplomacy", "size": 1},
        {"name": "Networking", "size": 1},
        {"name": "Negotiating", "size": 1},
        {"name": "Haggling", "size": 1},
        {"name": "Negotiating", "size": 1},
        {"name": "Debating", "size": 1},
        {"name": "Supporting", "size": 1},
        {"name": "Mediating", "size": 1},
        {"name": "Preserving", "size": 1},
        {"name": "Negotiating", "size": 1},
        {"name": "Persevering", "size": 1},
        {"name": "Persuasion", "size": 1},
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

      $scope.projectCount = socialActivistProjects.length + 3 || 0; /*Mega projects*/

    }]);
