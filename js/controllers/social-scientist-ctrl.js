// NOTE: nbApp is defined in app.js
nbApp.controller('socialScientistController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'Social Scientist Projects';

      var rootPath = '../content/roles/socialScientist/';
      // {"id": 0, name": "", "filepath": "", "description": ""},
      var socialScienceProjects = [
        {
        "id": 0, "name": "Neo-Corporatism and the 2008 Financial Crisis", "filepath": rootPath + "_Neo-Corporatism and the 2008 Financial Crisis.pdf",
        "description": "This research project examines why German insurance industries were more sheltered from economic hardship in the 2008 Economic Crisis relative to their American counterparts. The project suggests that Germany’s extensive use of Neo-Corporatism is a primary explanation of German superior performance. Neo-Corporatism is a system of interest group aggregation whereby government, corporations, and labor unions work together to find consensus for economic policies. To assess the role that Neo-Corporatism demonstrated in sheltering German insurance industries, this study investigated the differences between Allianz in Germany and AIG in the United States. Specifically I find that AIG sold Credit Default Swaps allowing for economic vulnerability and other negative consequences of the Securitization process, while Allianz encountered less adverse financial exposure due to differences throughout American and German markets. In sum, Neo- Corporatism is the key difference to the success of Allianz."
        },
        {
        "id": 1, "name": "Freedom, Control of Corruption, and Political Stability", "filepath": rootPath + "Freedom,ControlofCorruption,andPoliticalStability.pdf",
        "description": "Economic prosperity is one of the holy grails to a government. With the right amount of political stability, economic prosperity can be one step closer. The goal of this paper is to discover the relationship between political stability and freedom. Control of corruption is as influential as freedom and it has been carefully examined as well. Political stability is often associated with democratic institutions, and provides investors the opportunity to trust the market. Private markets have allowed a state to achieve economic prosperity. They have helped countries from around the world grow. They experienced high economic and societal growth rates. Those states were only presented the opportunity however to accept investors because they had political stability..."
        },
        {
        "id": 2, "name": "Social Upheaval in China", "filepath": rootPath + "Social Upheaval in China.pdf",
        "description": "China faces decline brought upon by decreased economic domestic growth, the result of international circumstance, ultimately leading to resurgence of labor unrest and the dispute of power in China; this thereby causes Chinese social upheaval in the form of internal conflict and divisions between the Chinese Communist Party (CCP) and the People’s Liberation Army (PLA). A gradually worsening domestic condition, the growing strife and burden put on the 150 million lower class rural citizens has continued to build and accelerates due to the impact of the domestic economy..."
        },
        {
        "id": 3, "name": "Germany in 2013: A Special Case for an Unpredictable Future", "filepath": rootPath + "Germany in 2013.pdf",
        "description": "In today's contemporary setting, Germany portrays the status of an economic example for efficiency. “Germany has long been Europe's strongest economic power; it has a gross domestic product of about $3.1 trillion – the fifth largest in the world...” and represents one of the most influential states in Europe. With a highly trained populous, and the ability to develop and manufacture some of most modern technologies, medical advancements, and global products, “[t]he country's leading role does not always sit well with its citizens, who have protested calls from eurozone finance ministers for Germany to increase bailout funds for countries such as Italy, Spain and Greece.”..."
        },
      ];

      $scope.projects = socialScienceProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

    }]);
