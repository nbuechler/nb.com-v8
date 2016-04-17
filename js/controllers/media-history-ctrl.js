// NOTE: routerApp is defined in app.js
routerApp.controller('mediaHistoryController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'Media History Projects';

      var rootPath = '../content/roles/mediaHistory/';
      // {"id": 0, name": "", "filepath": "", "description": ""},
      var mediaHistoryProjects = [
        {
        "id": 0, "name": "", "filepath": "",
        "description": ""
        },
        {
        "id": 1, "name": "", "filepath": "",
        "description": ""
        },
        {
        "id": 2, "name": "", "filepath": "",
        "description": ""
        },
        {
        "id": 3, "name": "", "filepath": "",
        "description": ""
        },
        {
        "id": 4, "name": "", "filepath": "",
        "description": ""
        },
        {
        "id": 5, "name": "", "filepath": "",
        "description": ""
        },
        {
        "id": 6, "name": "", "filepath": "",
        "description": ""
        },
        {
        "id": 7, "name": "", "filepath": "",
        "description": ""
        },
        {
        "id": 8, "name": "", "filepath": "",
        "description": ""
        },
        {
        "id": 9, "name": "", "filepath": "",
        "description": ""
        },
        {
        "id": 10, "name": "", "filepath": "",
        "description": ""
        },
      ];

      $scope.projects = mediaHistoryProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

    }]);
