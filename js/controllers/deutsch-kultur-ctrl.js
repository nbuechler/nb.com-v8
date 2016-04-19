// NOTE: routerApp is defined in app.js
routerApp.controller('deutschKulturController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'Deutsch Kultur Projects';

      var rootPath = '../content/roles/culturalAnthropologist/deutsch/';
      // {"id": 0, name": "", "filepath": "", "description": ""},
      var deutschKulturProjects = [
        {
        "id": 0, "name": "Bibel und Torah: Gemeinsamkeiten und Unterschiede", "filepath": rootPath + "Bibel und Torah-Gemeinsamkeiten und Unterschiede.pdf",
        "description": "Das Judentum und Christentum sind sehr wichtig für die Kulturen, die an diese Religionen glauben. Die Traditionen, die ähnlich sind, sind nicht so gross wie die Sachen, die verschieden sind, aber alle Sachen sind sehr wichtig für die Religionen. In Wirklichkeit, versuchen beide Religionen ähnliche Ziele zu erreichen, z.B. gute Menschen zu sein, keinen Krieg zu haben, eine bessere Welt zu erstellen..."
        },
        {
        "id": 1, "name": "Juden und ihre Rolle als Bankiers", "filepath": rootPath + "Juden und ihre Rolle als Bankiers.pdf",
        "description": "Bankiers sind sehr wichtig in der Gesellschaft seit die Leute Bargeld verwenden. In moderner Gesellschaft ist die Rolle der Bankiers wichtiger, weil viele der Transaktionen computergestützt sind. Ein anderer interessanter Punkt ist, dass Juden noch immer eine wichtige Rolle in der Kunst des Bankwesens spielen, gerade wie sie seit dem Mittelalter machten..."
        },
        {
        "id": 2, "name": "Die Rolle der Juden in Deutschland durch die Geschichte", "filepath": rootPath + "Die Rolle der Juden in Deutschland durch die Geschichte.pdf",
        "description": "Das Thema Juden in Deutschland ist sehr kontrovers. Viele Leute haben viele Meinungen. Dieses Thema, produzierte Spannung zwischen so vielen Leuten in der Geschichte von Deutschland. Aber obwohl einige Leute glaubten, dass Juden manchmal schlecht warum, der Staat, der heute Deutschland ist, ist besser, weil Juden in so vielen Bereichen beigetragen haben..."
        },
        {
        "id": 3, "name": "Persoenliche Stellungnahme zum Film „Da-Da-R“", "filepath": rootPath + "Persoenliche Stellungnahme zum Film.pdf",
        "description": "Der Film „Da-Da-R“ war zum mindstens interessant, aber es war serh künstlerrischen. Er hat eine Erzählung, die die Geschichte des Films zusammen hält. Die Grundstück ist über die Leben von zwei Clowns, wörtlich. Aber die komplexere Konzept war die zwei Clowns und ihren symbolische Existenz, die das Leben von Leute, die in die DDR lebten, vertreten, und wie sie interagierten mit ihren Umgebung. Der Film hatte so viel zu übersprechen, aber die meistens komplexe Sauchen waren die Symbole..."
        },
        {
        "id": 4, "name": "Jud Süss: die Analyse", "filepath": rootPath + "Jud Suess.pdf",
        "description": "Jud Süss bekannt als einem kontrovers Film um die Welt spielte auf die Klischee der Juden. Viele Juden in der Film wären in sehr negative Weise. Kurzem die Juden lachte und anspeien bei der Welt wegen viele Juden in den Film anzeihen als barbarisch und unmenschlich. Kürzlich der Film war auf „Youtube“ verboten, weil die Deutsche Regierung besagt, dass es zu kontroversen eines Filmes ist..."
        },
      ];

      $scope.projects = deutschKulturProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

    }]);
