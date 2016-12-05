// NOTE: nbApp is defined in app.js
nbApp.controller('computerProgrammerController', ['$scope', '$http',
    function($scope, $http) {
      // {"name": "", "description": "", "bkgd": "", "color": "", "link": ""},
      var allProjects = [
        "javascript-density-scope"
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
            response[i].bkgd = 'programmingBKGD';
            response[i].color = 'info';
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
        {"name": "Atom.io", "size": 1},
        {"name": "Brackets.io", "size": 1},
        {"name": "Notepad++", "size": 1},
        {"name": "Webstorm", "size": 1},
        {"name": "vim", "size": 1},
        {"name": "JIRA", "size": 1},
        {"name": "Git", "size": 1},
        {"name": "SVN", "size": 1},
        {"name": "Apache", "size": 1},
        {"name": "VirtualBox", "size": 1},
        {"name": "CSV", "size": 1},
        {"name": "TSV", "size": 1},
        {"name": "JSON", "size": 1},
        {"name": "BSON", "size": 1},
        {"name": "XML", "size": 1},
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
