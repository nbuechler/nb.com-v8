// NOTE: routerApp is defined in app.js
routerApp.controller('europeanPoliticalSystemsController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'European Political Systems Projects';

      var rootPath = '../content/roles/comparativeInstitutionalist/Institutionalism/';
      // {"id": 0, name": "", "filepath": "", "description": ""},
      var europeanPoliticalSystemsProjects = [
        {
        "id": 0, "name": "", "filepath": rootPath + "",
        "description": ""
        },
        {
        "id": 1, "name": "", "filepath": rootPath + "",
        "description": ""
        },
        {
        "id": 2, "name": "", "filepath": rootPath + "",
        "description": ""
        },
        {
        "id": 3, "name": "", "filepath": rootPath + "",
        "description": ""
        },
        {
        "id": 4, "name": "", "filepath": rootPath + "",
        "description": ""
        },
        {
        "id": 5, "name": "", "filepath": rootPath + "",
        "description": ""
        },
        {
        "id": 6, "name": "", "filepath": rootPath + "",
        "description": ""
        },
        {
        "id": 7, "name": "", "filepath": rootPath + "",
        "description": ""
        },
        {
        "id": 8, "name": "", "filepath": rootPath + "",
        "description": ""
        },
        {
        "id": 9, "name": "", "filepath": rootPath + "",
        "description": ""
        },
        {
        "id": 10, "name": "", "filepath": rootPath + "",
        "description": ""
        },
        {
        "id": 11, "name": "", "filepath": rootPath + "",
        "description": ""
        },
      ];

      $scope.projects = europeanPoliticalSystemsProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

    }]);
