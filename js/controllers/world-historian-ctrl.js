// NOTE: nbApp is defined in app.js
nbApp.controller('worldHistorianController', ['$scope', '$http',
    function($scope, $http) {
      // {"name": "", "filepath": "", "t_filepath": ""},
      var worldHistorianProjects = [
      ];

      $scope.projects = [];

      /*
       * Skills and projects
       */

      $scope.skills = [
        {"name": "Analyzing", "size": 1},
        {"name": "Researching", "size": 1},
        {"name": "Writing", "size": 1}
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

      $scope.projectCount = worldHistorianProjects.length + 3 + 5 + 5 + 3 + 5 + 8 || 0; /*Projects from sub roles*/

    }]);
