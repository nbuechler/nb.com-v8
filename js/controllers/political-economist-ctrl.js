// NOTE: routerApp is defined in app.js
routerApp.controller('politicalEconomistController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'Political Economist Projects';

      var rootPath = '../content/roles/politicalEconomist/';
      // {"id": 0, name": "", "filepath": "", "description": ""},
      var politicalEconomistProjects = [
        {
        "id": 0, "name": "The Possibility of Learning from the Mistakes of Others", "filepath": rootPath + "The Possibility of Learning from the Mistakes of Others.pdf",
        "description": "In the United States, a financial crisis began in 2008 from a few simultaneous events. The housing bubble burst which exposed many debtors as unworthy of their prior investments. Also, commodity prices decreased rapidly around the world. Finally, speculation, an ever persistent problem contributed to the crisis. In the 1990’s, an equally troublesome crisis occurred in South East Asia. Beginning with Thailand, and spreading to other surrounding economies in the region an entanglement of epic proportions occurred. Each situation has fundamental causes that can be attributed to the failure of the financial institutions in each region..."
        },
        {
        "id": 1, "name": "Globalization and the MCO World-View", "filepath": rootPath + "Globalization and the MCO World-View.pdf",
        "description": "The Multi-Centric Organizational model presents the view point that flaws exist in thinking that only market forces are important when discussing economic relationships. However important as this is, it is more notable that power interactions between different groups and institutions have an important role in the overall politically economic system. Many different institutions are discussed among some of the main intergovernmental institutions by Joeseph Stiglitz in Globalization and Its Discontents (10). The United Nations, International Labor Organization, World Health Organization, are some among other economic institutions like the International Monetary Fund, the World Bank, and the World Trade Organization..."
        },
        {
        "id": 2, "name": "Politics, Markets, and the Arab Region", "filepath": rootPath + "Politics, Markets, and the Arab Region.pdf",
        "description": "The events that began on January 25th, 2011 will be at the very least some of the most exciting of the year. When TIME magazine and other news sources write their annual summaries of the year, it is very probable that they will describe the events from an unbiased point of view. I agree that this is an important milestone in history, and am interested in how the events that occurred will allow for the growth or decline of Egypt. The uprising that occurred and grew over the course of two weeks was not; however, an event that spawned from nothing, but instead can be traced to a series of events that lead up to a revolution that may act as a catalyst for many other events in the region..."
        },
        {
        "id": 3, "name": "Trusting UMBC to trust itself: A Description of Deteriorating Trust", "filepath": rootPath + "Trusting UMBC to trust itself-A Description of Deteriorating Trust.pdf",
        "description": "Each individual already holds a certain level of confidence and reliance that one will be able to depend on their neighbor. As a result, they provide at least an equal level of trust to that neighbor. Little by little, the overall relationship grows, and with it the amount of interdependency. The greatest risk with this symbiosis is the fragility that is associated with this interdependency. The shared fidelity and loyalty to the mutual well being between the two parties is essential. When this relationship deteriorates, it is almost impossible to recover the trust necessary to allow a society to function..."
        },
        {
        "id": 4, "name": "The Supposed Chinese Economic Ascension", "filepath": rootPath + "The Supposed Chinese Economic Ascension.pdf",
        "description": "Rapid development has occurred in China over the latter half of 20th century. Economically, China has established itself as the second largest GDP and due to political policy this has been further amplified. Although China has not fully developed, it is a major player within the overall global market. Due to its arguable treatment of its lower class, it has many more challenges to hurdle. In fact, a middle class is growing, and with that the possible development of a civic society..."
        },
        {
        "id": 5, "name": "Shifting Global Economic Order: The Impact of Sovereign Debt and Credit Default Swaps", "filepath": rootPath + "Shifting Global Economic Order-Sovereign Debt and Credit Default Swaps.pdf",
        "description": "Any state historically had credit to effectively utilize as an important financial instrument for use in controlling its sphere of the global economy and the population within its territory. Debt was also an instrument that notably pertained to the positive and negative side-effects of household management. Debt and credit, efficiently applied by states and strictly these actors, would act as leveraging forces that inherently allowed the state to influence its environment. But, the common norm of states with strict economic control changed rapidly throughout the industrial era..."
        },
        {
        "id": 6, "name": "Always Curb the Market System", "filepath": rootPath + "Always Curb the Market System.pdf",
        "description": "In our modern day society, our ‘Gesellschaft’ perhaps, we allow for a system to govern itself with very a varying amount of oversight. We call this system the Market System due to its reliance on the economic forces that influence the growth and development of the State and the surrounding areas of the State. Unlike that of the fallen Soviet Union, where the Command Economy had ‘strong thumbs and no fingers,’ the Capitalistic society has quite the opposite if left unchecked (Lindblom). This is the reason for curbing the market system. There is a need to create, if the image is not too odd, a prosthetic thumb..."
        },
        {
        "id": 8, "name": "Implications of the Market Model", "filepath": rootPath + "Implications of the Market Model.pdf",
        "description": "The market-based economic model, or “market model,” is a concept which resonates with much of modern society in almost every major location globally. Even China, which has a strong political institution, utilizes basic concepts of market economics. Daniel Yergin and Joseph Stanislaw discuss concrete examples of the market model in The Commanding Heights, whereas Raymond C Miller discusses the theory of market model in International Political Economy: Contrasting world views. The reasoning behind popularity of the market model can be summed up in the mistakes of Arthur Lewis..."
        },
      ];

      $scope.projects = politicalEconomistProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

    }]);
