// NOTE: routerApp is defined in app.js
routerApp.controller('deutschMenschenController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'Deutsch Menschen Projects';

      var rootPath = '../content/roles/worldHistorian/germanpeople/';
      // {"id": 0, name": "", "filepath": "", "description": ""},
      var deutschMenschenProjects = [
        {
        "id": 0, "name": "Max Weber", "filepath": rootPath + "Max Weber.pdf",
        "description": "Max Weber hatte ein ganzes und intellektuell erfülltes Leben. Weber, der ältest von sieben Kinder war, wurde am 21. April 1864 geboren in Erfurt, Thuringia und er ist am 14. June 1920 gestorben. Max Weber Sr. (Vater) war ein Staatsbeamte und arbeitet für die Natioanle Liberal Partei. Er hatte irdischen Freuden gern. Im gegenteil hatte Weber’s Helene Fallenstein (Mutter) nicht gern..."
        },
        {
        "id": 1, "name": "Ulrike Meinhof", "filepath": rootPath + "Ulrike Meinhof.pdf",
        "description": "Ulrike Meinhof, die besser als eine deutsche Terroristin von der Roten Armee Fraktion (RAF) bekannt war, wurde in Oldenburg geboren. Sie lebte vom 7. Oktober 1934 bis 9. Mai 1976 und war in ihrem Leben Mitbegründerin der Rote Armee Fraktion. Davor war sie Journalistin für ihre Kolumne in „Konkret“. Sie schrieb ein von ihre berühmten Zitaten: „Protest ist, wenn ich sage, das und das paßt mir nicht. Widerstand ist, wenn ich dafür sorge, daß das, was mir nicht paßt, nicht länger geschieht.“ Es war eine der berühmtesten Sachen, die sie schreib..."
        },
        {
        "id": 2, "name": "Sophie Scholl", "filepath": rootPath + "Sophie Scholl.pdf",
        "description": "In der Geschichte wurde Sophie Scholl in einem schlechten Ort gebort und triumphierte. Obwohl sie getötet wurde, wurden ihre Ziele erreicht. Sie war sehr jung um eine Bewegung gegen die Nazi Partei zu machen. Ich finde, dass es besonders interessant war, dass sie wenig Hilfe von anderen hatte und dass die anderen nicht älter als sie waren. Vielleicht war es, dass die neue Generation zu erst die Probleme in Deutschland sahen..."
        },
        {
        "id": 3, "name": "Marlene Dietrich", "filepath": rootPath + "Marlene Dietrich.pdf",
        "description": "Marlene Dietrich war nicht nur das Symbol Berlins sondern auch eine talentierte Frau, die als ein „Paket“ eine der besten musikalisch begabten Frauen in Deutschland war. Weil sie berühmt war, liebten sie viele Leute. Die Zahl der Filme, in denen sie eine Rolle spielte, war sehr gross und natürlich gewann sie viele Preise für ihr Talent. Sie war auch eine Sängerin und viele ihrer Lieder sind bekannt. Der Gesamteindruck, den sie macht, kann nur als ein totales „Paket“ beurteilt werden..."
        },
        {
        "id": 4, "name": "Clara Zetkin", "filepath": rootPath + "Clara Zetkin.pdf",
        "description": "Clara Zetkin war eine sozialistische Sprecherin für meistes von ihrem erwachsenen Leben. Sie glaubte, dass sie der Welt durch viele Weise helfen könnte. Die zwei meist wichtigsten Dinge für sie waren die Frauenbewegungen, nicht nur in Deutschland, sondern in der Welt, und die die marxistischen Ideen zur ihre Philosophie über den Sozialismus unterstützten. Vielleicht war sie an dem richtigen Ort zur richtigen Zeit..."
        },
        {
        "id": 5, "name": "Maria Sibylla Merian", "filepath": rootPath + "Maria Sibylla Merian.pdf",
        "description": "Maria Sibylla Merian war eine berühmte Frau in der Welt der Wissenshaftler. Merians Text Der Raupen wunderbare Verwandlung und sonderbare Blumennahrung war eines ihrer einflussreichsten Werke. Sie war wichtig für die Deutschen, weil sie eine neue Disziplin gründete. Auch sie half viele Metamorphose zu verstehen. Schließlich hatte sie viele künstleriche Ideen und ihre Erfolgreich in die Bereich von „Kuppersliche“ war eine grosse Leistung, weil normalerweise eine männliche Reich war. Die deutsche Kultur kann ihre Erolge feiern..."
        },
        {
        "id": 6, "name": "Hannah Arendt", "filepath": rootPath + "Hannah Arendt.pdf",
        "description": "Hannah Arendt war eine politische Frau und studierte viele interessante Sauchen z. B. judische kultur in duetsche Geschichte. Sie einflusste die Welt in eine grosse Art und Weise, weil ihre Kontributieren von ihre Leidenschaft ihrer Ideen kommen. Sie hatte viele wichtige Qualitäten, dass ohne alle sie besonders ihre Leidenshaft haben, als sie ihre socilogischen Leistungen machte. Also die Frau sehr wichtig für die deutsche Kultur und Geschichte und den Welt..."
        },
        {
        "id": 7, "name": "Helene Weigel", "filepath": rootPath + "Helene Weigel.pdf",
        "description": "Helene Weigel war eine erfolgreiche Frau in dem Bereich des Theaters. Obwohl sie in einer Zeit war, in der Juden nicht akzeptiert wurden, war sie nach dem zweiten Welt Krieg eine der besten Frauen im Theater. Ihr Talent dastellte viele Brecht Charakters, die in modernen Zeiten noch benutzt werden. Als eine Frau in einem schwierigen Bereich für Frauen und Männer teilzunehmen, machte sie eine ausgezeichnete Arbeit und also hatte sie Erfolg..."
        },
      ];

      $scope.projects = deutschMenschenProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

    }]);
