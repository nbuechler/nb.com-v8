// NOTE: nbApp is defined in app.js
nbApp.controller('computerProgrammerController', ['$scope', '$http',
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
        {"name": "HTML/XHTML/HTML5", "size": 1},
        {"name": "CSS/CSS2/CSS3", "size": 1},
        {"name": "JavaScript (ES5/ES6)", "size": 1},
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
