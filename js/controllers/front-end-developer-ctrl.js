// NOTE: nbApp is defined in app.js
nbApp.controller('frontEndDeveloperController', ['$scope', '$http',
    function($scope, $http) {
      // {"name": "", "description": "", "bkgd": "", "color": "", "link": ""},
      var allProjects = [
        {"name": "nb.com-v8", "description": "Version 8 because I've made quite a few web pages for myself, and I've lost count ",
        "bkgd": "programmingBKGD", "color": "info", "link": "nb.com-v8"},
        {"name": "nathanielbuechler", "description": "My webpage *was* live on http://www.nathanielbuechler.com",
        "bkgd": "programmingBKGD", "color": "info", "link": "nathanielbuechler"},
        {"name": "evgroio", "description": "introspective learning tool for educational use",
        "bkgd": "programmingBKGD", "color": "info", "link": "evgroio"},
        {"name": "cat-clicker", "description": "Click a picture of a cat and increment",
        "bkgd": "programmingBKGD", "color": "info", "link": "cat-clicker"},
      ];

      $scope.projects = allProjects;

      $scope.selectProject = function(project) {
          $scope.selectProject = project;
      };

      /*
       * Skills and projects
       */

      $scope.skills = [
        {"name": "HTML/XHTML/HTML5", "size": 1},
        {"name": "CSS/CSS2/CSS3", "size": 1},
        {"name": "JavaScript (ES5/ES6)", "size": 1},
        {"name": "D3.js", "size": 1},
        {"name": "dc.js", "size": 1},
        {"name": "crossfilter.js", "size": 1},
        {"name": "nv.D3", "size": 1},
        {"name": "Google Charts", "size": 1},
        {"name": "yeoman.io", "size": 1},
        {"name": "ionic.io", "size": 1},
        {"name": "angular.js", "size": 1},
        {"name": "express.js", "size": 1},
        {"name": "ember.js", "size": 1},
        {"name": "node.js", "size": 1},
        {"name": "MEAN.js", "size": 1},
        {"name": "moustache.js", "size": 1},
        {"name": "handlebars.js", "size": 1},
        {"name": "knockout.js", "size": 1},
        {"name": "meteor.js", "size": 1},
        {"name": "react.js", "size": 1},
        {"name": "flux", "size": 1},
        {"name": "redux", "size": 1},
        {"name": "Babel", "size": 1},
        {"name": "Grunt", "size": 1},
        {"name": "npm", "size": 1},
        {"name": "bower", "size": 1},
        {"name": "webpack", "size": 1},
        {"name": "jQuery UI", "size": 1},
        {"name": "jQuery Mobile", "size": 1},
        {"name": "WordPress", "size": 1},
        {"name": "Joomla", "size": 1},
        {"name": "phpBB", "size": 1},
        {"name": "Bootstrap", "size": 1},
        {"name": "AJAX", "size": 1},
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
