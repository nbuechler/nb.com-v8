// NOTE: nbApp is defined in app.js
nbApp.controller('mediaHistoryController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'Media History Projects';

      var rootPath = '../content/roles/worldHistorian/mediahistory/';
      // {"id": 0, name": "", "filepath": "", "description": ""},
      var mediaHistoryProjects = [
        {
        "id": 0, "name": "Early Modern Literacies", "filepath": rootPath + "Early Modern Literacies.pdf",
        "description": "Harvey J. Graff discusses the role that the Protestant Reformation held during the later period of the Medieval Era, and discussed two major developments of the Reformation. In “Early Modern Literacies,” (1) the contribution of the printing press, not only as a technology but also as a social device, and (2) the use of the vernacular were instrumental in creating economic, political, cultural, and social mass movement. Triggered by Martin Luther’s ninety-five theses in 1518, the Reformation allowed for literacy among more than the religious elites..."
        },
        {
        "id": 1, "name": "The New Journalism", "filepath": rootPath + "The New Journalism.pdf",
        "description": "Journalism began to develop drastically; differing from the Penny Press, reporting was invented near the end of the 19th century. In “The New Journalism” by Michael Schuldson, the description of different journalistic sources was emphasized whereas different styles of journalism took different stances on the new discipline. Journalists often chose their style based on the ideals of entertaining or based on the ideals of factuality; some reports subscribed concurrently to both..."
        },
        {
        "id": 2, "name": "Early Radio", "filepath": rootPath + "Early Radio.pdf",
        "description": "Susan Douglas discusses in her chapter “Early Radio” the establishment of Radio. Beginning as a primitive form of the modern notion of a radio, old wire antennas and crystal black boxes were powered by batteries. These were the first radio devices, and the assembly of these systems was the sole responsibility of the owner. In fact, boys and men introduced the device in a similar manner to what they would later do with computing technology as computers were invented. In the early 1920’s, radios helped to form a more genuine sense of national identity..."
        },
        {
        "id": 3, "name": "Social Media Marketing", "filepath": rootPath + "Social Media Marketing.pdf",
        "description": "The ability to attract an audience and retain the attention of that audience in a sufficient period of time is critical to the success of a salesperson. In fact, without the marketing component, it is likely a message may be lost in communication. Social Media Marketing simply supplements the promotion process, referring to the ability to utilize website traffic in a manner that resembles the traditional framework of customary media..."
        },
        {
        "id": 4, "name": "Marshall McLuhan’s Realm", "filepath": rootPath + "Marshall McLuhan’s Realm.pdf",
        "description": "Marshall McLuhan established that the notion “the medium is the message” simply changes the perception that society has with itself. To support this idea, Mark Federman attempts to support the ideas of McLuhan by describing “McLuhan meant what he said; unfortunately, his meaning is not at all obvious, and that is where we begin our journey to understanding”..."
        },
      ];

      $scope.projects = mediaHistoryProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

    }]);
