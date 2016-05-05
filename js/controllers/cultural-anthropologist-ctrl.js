// NOTE: nbApp is defined in app.js
nbApp.controller('culturalAnthropologistController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'Cultural Anthropologist Projects';

      var rootPath = '../content/roles/culturalAnthropologist/';
      // {"id": 0, name": "", "filepath": "", "description": ""},
      var culturalAnthropologistProjects = [
        {
        "id": 0, "name": "Consuming Grief: Compassionate Cannibalism in an Amazonian Society", "filepath": rootPath + "Consuming Grief.pdf",
        "description": "Focusing on the Wari’ people, this examines the process of coping with the loss of loved ones. The western ideal of burying the dead is not followed in the Wari’ culture, in fact the opposite is the more preferred option. It is considered wrong for two reasons. First, it is shameful for the dead. Second, and more important, the dead are still part of the world if they are buried, whereas, when they are cannibalized they do not have any connection to the world. This is why the possessions of the dead are also destroyed, and any spot associated with them is changed."
        },
        {
        "id": 1, "name": "Ideology of Gradual Decentralization and Ideological Constructs", "filepath": rootPath + "Ideology of Gradual Decentralization and Ideological Constructs.pdf",
        "description": "Master and slave, or the relationship between authority and subservience to that authority, embodies the composite of contrasting forces. An ideal analytical approach to finding a trajectory of peace and fulfillment of many polities eliminates the negative consequences of the relationship between master and slave. This is mainly due to the altruism that a master can exert on the slave. And in all situations, every human by nature is subject to ideology – or the inevitable master...."
        },
        {
        "id": 2, "name": "Language as a Doorway into the Eyes of Another", "filepath": rootPath + "Language as a Doorway into the Eyes of Another.pdf",
        "description": "Language adds emphasis to everyday events. It changes the perception of reality, but does not actually change what exists. Language may very well be one of the most defining aspects to a culture, after all, many if not all people of a particular speak it. This is, therefore, a unifying characteristic of the culture. In some tribes, like the Inuit, Aivilik and Igloolik, they have many different names for snow compared to Standard English. In contrast, other cultures have different names for the colors of the rainbow, and sometimes less names, compared to the western idea of a rainbow. Also, a study done in Hungary examined the difference between bilingual schools and the perspective of students based upon learning material in two languages. Both of these concepts examine the idea that language can act as a doorway to understanding the world from the perspective of another person or group of people. If someone was to determine the main differences in languages across a variety of cultures, then perhaps, someone could see the world through the eyes of that culture."
        },
        {
        "id": 3, "name": "Post-Colonial English Speaking States in North America", "filepath": rootPath + "Post-Colonial English Speaking States in North America.pdf",
        "description": "Both the United States and Canada are two English-speaking countries that have very different political cultures, historical backgrounds, and linguistic policies. In addition, both states are similar in so far that they both have federalist structures of government, similar foreign policies, a common historical root as British colonies, and continue to have English as a majority language. Yet, Canada is a state that has a large French-speaking population and the United States has a growing Spanish-speaking population; both are considered as minority groups and have shaped language policy in different ways. In fact, the Spanish-speaking regions of the United States developed autonomy and representation in a different manner than that of the French-speaking population of their counterparts in Canada, but nonetheless both nations created an institution within their respective states that allowed them representation and a voice that allowed them preservation of their national identity...."
        },
      ];

      $scope.projects = culturalAnthropologistProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

      /*
       * Skills and projects
       */

      $scope.skills = [
        {"name": "Analyzing", "size": 1},
        {"name": "Researching", "size": 1},
        {"name": "Writing", "size": 1}
      ];

      var skillString = "";

      for (var i = 0; i < $scope.skills.length; i++) {
        if($scope.skills.length - 1 == i){
          skillString += $scope.skills[i].name;
        } else {
          skillString += $scope.skills[i].name + ', ';
        }
      };

      $scope.skillString = skillString;

      $scope.projectCount = culturalAnthropologistProjects.length + 5 + 5 || 0; /*Other projects from sub roles*/

    }]);
