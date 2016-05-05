// NOTE: nbApp is defined in app.js
nbApp.controller('comparingTopicsController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'Comparing Topics Projects';

      var rootPath = '../content/roles/comparativeInstitutionalist/Topics/';
      // {"id": 0, name": "", "filepath": "", "description": ""},
      var comparingTopicsProjects = [
        {
        "id": 0, "name": "Decentralization and Liberty", "filepath": rootPath + "Decentralization and Liberty.pdf",
        "description": "In the historical period of roughly the last 2000 years, decentralization of power provided the necessary institutional arrangements that granted more western citizens the benefits of political and economic participation. The gradual trend towards democratization thoroughly describes the trend of liberalization, and more specifically the granting of liberty to individuals. On the whole, power that was centralized in the hands of a few religious and political elites, such as popes and kings, became more dispersed among larger groups of aristocracy, bourgeois, and eventually masses of citizens..."
        },
        {
        "id": 1, "name": "African States and Sovereign Instability", "filepath": rootPath + "African States and Sovereign Instability.pdf",
        "description": "The European advantages of security and unity are that of a region which provides stability to the constituencies that exist in the western world. Immediate systemic problems of African states are not fully comparable to the ones that Europe faced in its development due to a fundamentally different set of circumstances that Africa ought to solve. Jeffery Herbst suggests in “War and the African State,” the wars that shaped Europe, at great cost and destruction, provided the necessary unity to effectively tax and nationalize the citizens of Europe into sovereign states..."
        },
        {
        "id": 2, "name": "Individual Incentive and Institutional Structure", "filepath": rootPath + "Individual Incentive and Institutional Structure.pdf",
        "description": "The role of actors is inherently dependent on the societal structure of a given community, and institutions that incentivize the individual. Economic and political institutional ramifications influence the role of the individual, but while consensus is reached on this point, Adam Smith, David Ricardo, Clive Crook, Douglas North, and David Acemoglu take different perspectives on the incentives and influences of the individual. Each author does not directly reference members of society in the same manner; however, individual incentives are vital to the arguments that each author makes..."
        },
        {
        "id": 3, "name": "Communism and Post-communism", "filepath": rootPath + "Communism and Post-communism.pdf",
        "description": "The ability to form stable governance is essential to that of a society that is unified homogeneously across the globe. Karl Marx and Friedrich Engels define Communism as one possible global ideology. In this system the destruction of individual property is essential where private property is no longer exchangeable for labor, and also where Communism dictates a decentralized mode of production. Collective property, instead replaces the property of individuals, and is controlled by proletarians represented by the Communist Party..."
        },
        {
        "id": 4, "name": "Political Systems and their Economic Outcomes", "filepath": rootPath + "Political Systems and their Economic Outcomes.pdf",
        "description": "Advanced Democracy refers to the development of political and economic rights guaranteed to a civil society to a greater extent than the democratic revolutions of the 18th and 19th centuries. Each author examines the role that democratic institutions had in developing political systems, and finds different causal relationships between political institutions and economic outcomes. In some arguments economic outcomes are argued as a necessary requisite, and in others the inverse is the case..."
        },
        {
        "id": 5, "name": "Identity, Ideology, and Institutional Impacts", "filepath": rootPath + "Identity, Ideology, and Institutional Impacts.pdf",
        "description": "Personality, with regard to a certain aspect of reflection, irrefutably creates the notion of identification. More importantly, identity is a crucial keystone in fully grasping the overall depiction of certain ideologies, economic studies, or any other political or social concern; without a concise and clear comprehension of identity as a separate notion, one only notices portions of the overall relationship between people, things, and ideas. Yet, identity in relation to comparative institutions shapes the ideas of masses and elites alike. Louis Althusser, a French Marxist philosopher, notes that an inexplicable relationship exists between any state apparatus and the sense shared identity of certain groups of persons..."
        },
        {
        "id": 6, "name": "Nondemocratic Regimes and Institutional Restraints", "filepath": rootPath + "Nondemocratic Regimes and Institutional Restraints.pdf",
        "description": "Totalitarian tendencies define qualities of regimes that eliminate individual political and economic freedom for the utopian vision of a repressive state. Post-totalitarian regimes are transitional periods of government granting more liberties to individuals relative to the amount of autonomy they were granted by a totalitarian regime. As individual freedom grows, essential democratic institutions must be crafted to ensure that the enduring qualities of totalitarianism are eliminated. And as other nondemocracies become democratic regimes, institutions that restrain the centralized power of economic and political elites prevent democracies from becoming illiberal and only democratic in name..."
        },
      ];

      $scope.projects = comparingTopicsProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

    }]);
