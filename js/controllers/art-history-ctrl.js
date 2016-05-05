// NOTE: nbApp is defined in app.js
nbApp.controller('artHistoryController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'Art History Projects';

      var rootPath = '../content/roles/worldHistorian/arthistory/';
      // {"id": 0, name": "", "filepath": "", "description": ""},
      var artHistoryProjects = [
        {
        "id": 0, "name": "Assyrian (Winged Genius)", "filepath": rootPath + "Assyrian (Winged Genius).pdf",
        "description": "The sculpture (relief), the Relief with Winged Genius, was created by an unknown artist in the Assyrian Empire, between 883-859 BCE. During the Neo-Assyrian time period, this was created out of alabaster. The Relief with Winged Genius is arguably one of the most important sculptures that existed in the Assyrian Empire. It was said to have guarded the king, and therefore has a great deal of symbolic importance...."
        },
        {
        "id": 1, "name": "Reality versus Abstract: A Study of Simplicity and Color", "filepath": rootPath + "Simplicity and Color.pdf",
        "description": "Both Joseph Albers, in Homage to the Square, and Mark Rothko, in The Rothko Chapel, have similar qualities in the examination of color. Joseph Albers takes the approach by experimenting with optical effects produced by the juxtaposition of different combinations of colors. By comparing various color combinations, he was able to show that one color placed next to the other can create an entirely different visual experience for the viewer. Mark Rothko, on the other hand, experimented with the expressive power of pure color to evoke a deeply emotional response in viewers...."
        },
        {
        "id": 2, "name": "On Challenging Society through Art", "filepath": rootPath + "On Challenging Society through Art.pdf",
        "description": "The image depicts a female nude laying on some sort of bed in the bottom half of the painting, with another figure in left part. The figure is hard to make out, but it is possible to see that it is wearing a cloak. The color usuage has a high contrast and helps to add to the overall impression of the piece..."
        },
      ];

      $scope.projects = artHistoryProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

    }]);
