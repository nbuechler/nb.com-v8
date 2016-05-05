// NOTE: nbApp is defined in app.js
nbApp.controller('soundDesignerController', ['$scope', '$http',
    function($scope, $http) {
      // {"name": "", "filepath": "", "t_filepath": ""},
      var soundDesignProjects = [
      ];

      $scope.projects = [];

      /*
       * Skills and projects
       */

      $scope.skills = [
        {"name": "Audtion","size": 1},
        {"name": "Logic Pro", "size": 1}
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

      $scope.projectCount = soundDesignProjects.length + 5 || 0; /*Sound design projects are hosted online*/

    }]);
