// NOTE: routerApp is defined in app.js
routerApp.controller('politicalHistoryController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'Political History Projects';

      var rootPath = '../content/roles/worldHistorian/politicalhistory/';
      // {"id": 0, name": "", "filepath": "", "description": ""},
      var politicalHistoryProjects = [
        {
        "id": 0, "name": "Foundations and Expansion of the International Relations Discipline", "filepath": rootPath + "Foundations and Expansion of the IR Field.pdf",
        "description": "In only a succinct period of time, the formation of Political Science, there of specifically International Relations formed. Not only did scholars from across the world contribute, but conversation between Liberal and Realist thought transgressed in a mere 40 years between the 1940’s and the 1970’s. Although these numerous contributions can not be fully distinguished from one another, the creativity exemplified in but two pieces provided in the first case, a foundation for further study and development of the discipline, and in the second, a clear realignment and breakage into two major schools of thoughts..."
        },
        {
        "id": 1, "name": "Realist Tradition: Shaping the International Relations Theory Lens", "filepath": rootPath + "Realist Tradition- Shaping the International Relations Theory Lens.pdf",
        "description": "Stemming initially from different roots, International Relations became a discipline in where a vast array of perspectives collided. Liberal and Realist standpoints provide different insights, and accordingly it is a major fallacy to say that one standpoint will have ultimate supremacy in the discipline. This is mainly due to the nature that each perspective provides specific insight into a particular method of interpreting the perception one has of the political sphere. The Realist heritage is founded from Realpolitk, representing an American perspective of International Relations Theory..."
        },
        {
        "id": 2, "name": "Scholar Investigation: V. Spike Peterson", "filepath": rootPath + "V. Spike Peterson Scholar Essay.pdf",
        "description": "A distinguished scholar in the field of international relations must have a perspective that separates her from the others. In fact, having a background in a variety of different fields allows for a study of international relations allotted to only a few. The ability to think across disciplines therefore allows a scholar to provide valued and thoughtful insight that furthers not only international relations, but also other disciplines congruently..."
        },
      ];

      $scope.projects = politicalHistoryProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

    }]);
