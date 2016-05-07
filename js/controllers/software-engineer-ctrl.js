// NOTE: nbApp is defined in app.js
nbApp.controller('softwareEngineerController', ['$scope', '$http',
    function($scope, $http) {
      // {"name": "", "description": "", "bkgd": "", "color": "", "link": ""},
      var allProjects = [
        {"name": "hungry-interceptor", "description": "Intercepts data, does something with it, stores it",
        "bkgd": "engineeringBKGD", "color": "warning", "link": "hungry-interceptor"},
        {"name": "fixed-gateway", "description": "a gatway for all the front-end apps ",
        "bkgd": "engineeringBKGD", "color": "warning", "link": "fixed-gateway"},
        {"name": "friendly-finder", "description": "finds friends and other friendly fun ideas",
        "bkgd": "engineeringBKGD", "color": "warning", "link": "friendly-finder"},
        {"name": "log-grower", "description": "grows logs - based on mean stack boilerplate",
        "bkgd": "engineeringBKGD", "color": "warning", "link": "log-grower"},
        {"name": "studious-display", "description": "Displaying studious information and analytics",
        "bkgd": "engineeringBKGD", "color": "warning", "link": "studious-display"},
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
