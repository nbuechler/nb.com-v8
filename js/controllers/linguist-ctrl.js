// NOTE: nbApp is defined in app.js
nbApp.controller('linguistController', ['$scope', '$http',
    function($scope, $http) {
      // {"name": "", "filepath": "", "t_filepath": ""},
      var linguistProjects = [
      ];

      $scope.projects = [];

      /*
       * Skills and projects
       */

      $scope.skills = [
        {"name": "English", "size": 1},
        {"name": "German", "size": 1},
        {"name": "Spanish", "size": 1},
        {"name": "French", "size": 1},
        {"name": "Italian", "size": 1},
        {"name": "Swedish", "size": 1},
        {"name": "Portuguese", "size": 1},
        {"name": "Norwegian", "size": 1},
        {"name": "Russian", "size": 1},
        {"name": "Turkish", "size": 1},
        {"name": "Irish", "size": 1},
        {"name": "Danish", "size": 1},
        {"name": "Ukrainian", "size": 1},
        {"name": "Dutch", "size": 1},
        {"name": "Polish", "size": 1},
        {"name": "Catalan", "size": 1},
        {"name": "Welsh", "size": 1},
        {"name": "Esperanza", "size": 1},
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

      $scope.projectCount = linguistProjects.length + 18 || 0; /*Number of Languages*/

    }]);
