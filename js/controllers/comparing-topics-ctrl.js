// NOTE: routerApp is defined in app.js
routerApp.controller('comparingTopicsController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'Comparing Topics Projects';

      var rootPath = '../content/roles/journalist/pdf/';
      // {"id": 0, name": "", "filepath": "", "description": ""},
      var comparingTopicsProjects = [
        {
        "id": 0, "name": "School spirit: a problem at UMBC?", "filepath": rootPath + "1.pdf",
        "description": "An article describing the relationship between students and their university. In fact, While attempting to find the connection between the apparent lack of school pride, the notion of deeper interactions and more well-rounded social lives are examined."
        },
        {
        "id": 1, "name": "The many benefits of being multilingual", "filepath": rootPath + "2.pdf",
        "description": "Advocating for everyone to learn more than one reason, the purpose of this argument suggests that beneficial aspects of becoming multilingual encourage development in many aspects of a person's life. Ultimately, one will find that the benefits are worth the struggles."
        },
        {
        "id": 2, "name": "UMBC is no exception to having cultural cliques on campus", "filepath": rootPath + "3.pdf",
        "description": "Observationally making notes on the different social groups that for, the article presents the authors opinion and experiences as a way of relating to the reader. Additionally, the notion of a clique is challenged yet it is given that an experience will occur in any fashion."
        },
        {
        "id": 3, "name": "Newsflash: Infant mortality rates are a possible indicator of bad health care in the United States", "filepath": rootPath + "4.pdf",
        "description": "Looking from a systems perspective, the article challenges the notion of relying strictly on quantitative analysis and attempts to provide qualitative arguments to both support and reject the statistical indicators."
        },
        {
        "id": 4, "name": "The case of stolen lab computer inensifies", "filepath": rootPath + "5.pdf",
        "description": "Highly critical of the local police, this article initially attempts to provide an explanation for lab computers to be stolen twice in a short period. The attempt at a rationalization; however, with a possible genuine purpose may leave more confusion instead."
        },
        {
        "id": 5, "name": "Budget cuts push building repairs to the wayside", "filepath": rootPath + "6.pdf",
        "description": "The author attempts to support a mindset of favoring research and development of academics. Additionally, while the argument does not advocate for the neglect of building maintenance, it does appear apologetic to the community."
        },
        {
        "id": 6, "name": "Homecoming exceeds ecpectations for some", "filepath": rootPath + "7.pdf",
        "description": "While comparing and contrasting different experiences from the author's high school homecoming and the university homecoming, many expectations were challenged and some were exceeded. Overall, the article remarks and examines upon the vastly different cultures and mindsets surrounding the notion a homecoming."
        },
        {
        "id": 7, "name": "Obscene material resolution becomes a slippery slope", "filepath": rootPath + "8.pdf",
        "description": "Discussing current events as a way in which to caution the reader of disgusting futures, the ideas conveyed in this article discuss censorship. It questions the overall impact and success of policy aimed at attempting to control and silence ideas that cause discomfort."
        },
        {
        "id": 8, "name": "Alcohol violations on campuses, is it a problem at UMBC", "filepath": rootPath + "9.pdf",
        "description": "Understanding the implications of a social desire to consume intoxicating substances, the examination of policy and guidelines are discussed in detail. The reader is informed to use caution in making any decisions, especially those with regard to the usage of alcohol."
        },
      ];

      $scope.projects = comparingTopicsProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

    }]);
