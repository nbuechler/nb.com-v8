// NOTE: nbApp is defined in app.js
nbApp.controller('engineerController', ['$scope', '$http',
    function($scope, $http) {
      // {"name": "", "description": "", "bkgd": "", "color": "", "link": ""},
      var allProjects = [
        "nb.io"
      ];

      $scope.projects = []

      /*
       * Use this to get the most up-to-date repos:
       * $http.get('https://api.github.com/users/nbuechler/repos')
       */
      $http.get('js/json/repos.json')
      .success(function(response) {
        // console.log(response);
        for (var i = 0; i < response.length; i++) {
          if (response[i].fork != true && allProjects.indexOf(response[i].name) !== -1) {
            response[i].bkgd = 'engineeringBKGD';
            response[i].color = 'warning';
            $scope.projects.push(response[i]);
          }
        }
        $scope.loading = 0;
      });

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
