// NOTE: nbApp is defined in app.js
nbApp.controller('comparativeInstitutionalistController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'Comparative Institutionalist Projects';

      var rootPath = '../content/roles/comparativeInstitutionalist/Institutionalism/';
      // {"id": 0, "name": "", "filepath": "", "description": ""},
      var comparativeInstitutionalistProjects = [
        {
        "id": 0, "name": "Exit and Voice", "filepath": rootPath + "Exit and Voice.pdf",
        "description": "Hirschman refers to two major concepts, exit and voice, and how they influence at response to change in a society. The argument being made is that management in different organizations and institutions, whether political or economic, formal or informal, only recognize the public reaction in the form of an exit or voice..."
        },
        {
        "id": 1, "name": "The First Economic Revolution", "filepath": rootPath + "The First Economic Revolution.pdf",
        "description": "This sort of revolution was not any involving a massive change brought upon directly by violence, but it did result in a different way of interacting with the mechanisms (brought upon by institutions) in society. Many of those institutions were completely rewritten. As North discusses, it is a creation of a basic ‘incentive’ that grew into the division of resources that is commonly understood and accepted by modern civilizations of mankind in the last 10,000 years. He suggests that the common property rights, or CPRs, are detrimental to the growth of society, due in part to the lack of incentive, but mainly to the implication that little to no innovation is being made by micro-societies, and therefore, mankind as a whole..."
        },
        {
        "id": 2, "name": "The Second Economic Revolution and its connection to the First", "filepath": rootPath + "The Second Economic Revolution and its connection to the First.pdf",
        "description": "Both “Economic Revolutions” as coined by North resulted in extraordinary change in mechanisms of society. The formal institutional structures were either created, as in the first, or revised, as in the second. Innovation and incentive played key roles in both. Before I describe the connection more in-depth, I will focus my attention on the Second Economic Revolution..."
        },
        {
        "id": 3, "name": "Informal Institutions relating to Gender Equality", "filepath": rootPath + "Informal Institutions relating to Gender Equality.pdf",
        "description": "Informal institutions are different than formal institutions, or legally recognized rules, that civilization follows. Many informal institutions are evolved from the cultures of individual micro and macro groups of society. Also, they can come in many different shapes and forms because they arise from different reasons. Most of the time, they coexist with the formal institutions created by governments and bureaucracy, and therefore, informal institutions can even be ‘respected’ by society more than that written rulebook referred to by the structure of a formal institution..."
        },
        {
        "id": 4, "name": "Special-Interest Organizations, Jurisdictional Integration, and Economic Growth", "filepath": rootPath + "Special-Interest Organizations, Jurisdictional Integration, and Economic Growth.pdf",
        "description": "The relationship described between Special-Interest Organizations and the stability of a country is the central factor that Olson ties to the amount of growth in states. This can be further enhanced to discuss how the stability of the boundaries of a particular area, or region, effect the growth of these special-interest organizations. Simply put, if the boundaries have been stable for an increased period of time, the likelihood of the amount of effective special interest organizations is increased. Stability decreases the growth rate. Jurisdictional integration, or a focus on free trade between the region, (between different consumers, groups, states, etc.) slow down the progress of these different organizations’ formation and chances of success..."
        },
        {
        "id": 5, "name": "Monopolies and Voice", "filepath": rootPath + "Monopolies and Voice.pdf",
        "description": "Hirschman believes that monopolies are not as bad as his colleagues in the field of economics might believe. Because of his belief in voice of a group over them choosing to exit, and his understanding that in an economy many switch from company to company, he sees a monopoly as a mechanism to encourage voice. The definition of a monopoly, to my understanding, is a high level, if not total, control over a specific market. This means that a consumer or a group of individuals do not even have the option to exit if they want what the monopoly produces. Instead, they must voice their opinions and form groups to encourage the monopoly to change..."
        },
        {
        "id": 6, "name": "Whether Poor or Rich: Institutions Matter", "filepath": rootPath + "Whether Poor or Rich-Institutions Matter.pdf",
        "description": "The authors find that institutional planning is critical to the economic development of poor countries. In fact, poor countries need to focus on the economic ramifications associated with the institutions that best suit their culture. In the cases of African states, this is highly critical to the success of countries..."
        },
        {
        "id": 7, "name": "Political Monopolies between Italy and Sweden", "filepath": rootPath + "Political Monopolies between Italy and Sweden.pdf",
        "description": "The first half of this paper will be a synopsis and the second will be strictly my reaction. As discussed by Hirschman and reinforced by Forstiere, monopolies can sometimes be a positive mechanism in increasing the amount of voice. Voice increases the opportunities for innovation and growth since simply exiting the system allows, what many economists would call ‘free-riding.’ Change may still occur, but instead not all members of a society are contributing..."
        },
        {
        "id": 8, "name": "Starting with Number 1 – Design Principle", "filepath": rootPath + "Starting with Number 1 – Design Principle.pdf",
        "description": "Ostrom describes that a requirement before any progress can be made, the first design principle must be established. In short, it is stating the importance of clearly defined boundaries in long-enduring CPR institutions..."
        },
        {
        "id": 9, "name": 'Institutions solving the "Tragedy of the Commons"', "filepath": rootPath + 'Institutions solving the “Tragedy of the Commons”.pdf',
        "description": "The “Tragedy of the Commons” is appropriately named due to the waste of resources in a situation where one might not expect waste to occur at first glance. This is the idea that if something is commonly owned, then it will often times lose most if not all value; usually in the case of natural resources, e.g. water supplies, forestry, lakes and rivers for fishing, farmland, etc. and sometimes in man-made instances like transportation of cars over a bridge and the number of parking spaces in a public garages and parking lots, like the UMBC situation, for example. Therefore the value of these resources decreases dramatically, and is often either taken for granted or is completely exhausted of value, and the resource no longer exists..."
        },
        {
        "id": 10, "name": "The Logic of Collective Action", "filepath": rootPath + "The Logic of Collective Action.pdf",
        "description": "A paradox exists in regard to collective action due in part to the general notion that large groups that share similar goals do not organize effectively, even though at first glance one might believe that the shared mindset would be enough to unify the group. Because smaller groups have a tendency to form easier than larger groups, collective action has been shown to happen more often in the groups consisting of less individual ‘thought-processes” and not necessarily less individuals; a collective of five corporations has millions of employees. When someone feels that they are being ‘ripped-off’ by contributing and not seeing return on their involvement in a collective action, they are less likely to proceed with further action in the future, unless a ‘selective incentive’ is provided..."
        },
        {
        "id": 11, "name": "Who Killed the Economy – I’ll tell you who!", "filepath": rootPath + "Who Killed the Economy – I’ll tell you who!.pdf",
        "description": "To an idea, the speaker suggests that the lack of cooperation between the far right and far left is the cause of the economy. The only way progress can be made, according to the speaker, is through centrist policies. While the speaker may not have read the novels of the economists discussed in the semester, he makes a valid argument that can easily be supported by them..."
        },
      ];

      $scope.projects = comparativeInstitutionalistProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

    }]);
