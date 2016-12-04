// NOTE: nbApp is defined in app.js
nbApp.controller('backEndDeveloperController', ['$scope', '$http',
    function($scope, $http) {
      // {"name": "", "description": "", "bkgd": "", "color": "", "link": ""},
      var allProjects = ["basic-poll", "ideo-quest"];

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
				{"name": "PHP", "size": 1},
        {"name": "Python", "size": 1},
        {"name": "Flask", "size": 1},
        {"name": "Tornado", "size": 1},
        {"name": "Django", "size": 1},
        {"name": "NLTK", "size": 1},
        {"name": "pip", "size": 1},
        {"name": "Groovy", "size": 1},
        {"name": "Grails", "size": 1},
        {"name": "GSP", "size": 1},
        {"name": "Gradle", "size": 1},
        {"name": "Spock", "size": 1},
        {"name": "Java", "size": 1},
        {"name": "JSP", "size": 1},
        {"name": "JUnit", "size": 1},
        {"name": "Maven", "size": 1},
        {"name": "Ant", "size": 1},
        {"name": "Spring Framework", "size": 1},
        {"name": "Spring MVC", "size": 1},
        {"name": "Spring Security", "size": 1},
        {"name": "SpringSource TC Server", "size": 1},
        {"name": "Thymeleaf", "size": 1},
        {"name": "MySQL", "size": 1},
        {"name": "Oracle", "size": 1},
        {"name": "Mongo DB", "size": 1},
        {"name": "Neo4j", "size": 1},
        {"name": "HQL", "size": 1},
        {"name": "SQL", "size": 1},
        {"name": "Cypher", "size": 1},
        {"name": "Hibernate", "size": 1},
        {"name": "Travis CI", "size": 1},
        {"name": "AWS", "size": 1},
        {"name": "Heroku", "size": 1},
        {"name": "TeamCity", "size": 1},
        {"name": "Sonarqube", "size": 1},
        {"name": "Machine Learning", "size": 1},
        {"name": "Affective Computing", "size": 1},
        {"name": "IoT", "size": 1},
        {"name": "Databases", "size": 1},
        {"name": "DevOps", "size": 1},
        {"name": "Microservices", "size": 1},
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
