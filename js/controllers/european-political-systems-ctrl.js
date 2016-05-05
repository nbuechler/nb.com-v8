// NOTE: nbApp is defined in app.js
nbApp.controller('europeanPoliticalSystemsController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'European Political Systems Projects';

      var rootPath = '../content/roles/worldHistorian/europe/';
      // {"id": 0, name": "", "filepath": "", "description": ""},
      var europeanPoliticalSystemsProjects = [
        {
        "id": 0, "name": "Britain: Struggle for Sovereignty and Autonomy on too many Fronts", "filepath": rootPath + "Britain.pdf",
        "description": "With the oldest form of Democracy in the world, Britain had created an institution that relies on the sovereignty of its borders. Many Britons pride themselves on only one land invasion in its long history. It has, therefore, a democratic institution that has withstood the test of time, at least for a millennium..."
        },
        {
        "id": 1, "name": "France: The Strong Executive?", "filepath": rootPath + "France.pdf",
        "description": "Not to argue that the French President, Nicolas Sarkozy, does not have the powers of a strong executive, but rather that his influence and political capital is being expended rather hastily. Traditionally, as of the formation of the 5th Republic in France, the Executive has considerably more decision-making potential than its prior counterparts. Sarkozy; however, fulfilling the position, is reduced to the painstaking political game of appeasing the French population in an attempt earn a second term..."
        },
        {
        "id": 2, "name": "Germany: European Economic Problem Part X?", "filepath": rootPath + "Germany.pdf",
        "description": "Is this but one the many problems that Germany will face resulting from EU instability? It seems likely due to the economic turmoil that has run amok in Greece, Spain, Italy, and other countries in Europe. It is unfortunate that this is occurring due to the nature of other problems that Germany has had to face in the past month under the leadership of Angel Merkel, the German Chancellor..."
        },
        {
        "id": 3, "name": "Italy: Berlusconi’s Blunder", "filepath": rootPath + "Italy.pdf",
        "description": "Silvio Berlusconi has recently made too many actions that have resulted in a loss of political capital for him. His ratings are down, his policies are not being enacted, and his legitimacy overall as a leader is falling. This situation is occurring not only in Italy, but also internationally, and as a result, many scholars believe that he may not survive as Prime Minister for much longer...."
        },
        {
        "id": 4, "name": "Russia: Dramatic Theater", "filepath": rootPath + "Russia.pdf",
        "description": "Even though Russia is an illiberal Democracy, it still has elections. Different parties participate, and someone is elected. Usually this is a member of the United Russia Party. In fact, the political system does not look very legitimate from an outside perspective. Some may argue that it is illegitimate to those who are Russian citizens...."
        },
      ];

      $scope.projects = europeanPoliticalSystemsProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

    }]);
