// NOTE: routerApp is defined in app.js
routerApp.controller('deutschKulturController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'Deutsch Kultur Projects';

      var rootPath = '../content/roles/worldHistorian/deutschKultur/';
      // {"id": 0, name": "", "filepath": "", "description": ""},
      var deutschKulturProjects = [
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
      ];

      $scope.projects = deutschKulturProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

    }]);
