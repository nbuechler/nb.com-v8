// NOTE: nbApp is defined in app.js
nbApp.controller('affectiveEngineerController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Projects are listed on the left. Select one to read more about the topic.';
      $scope.selectedProject = null;
      $scope.title = 'Affective Engineer Research Projects';

      var rootPath = '../content/roles/affective-engineer/pdf/';
      // {"name": "", "filepath": "", "description": ""},
      var allProjects = [
        {
        "name": "The Promise of Affective Computing", "filepath": rootPath + "2-ThePromiseofAffectiveComputing.pdf",
        "description": "Summary of Chapter 2 from The Oxford Handbook of Affective Computing."
        },
        {
        "name": "A Short History of Psychological Perspectives on Emotion", "filepath": rootPath + "3-AShortHistoryofPsychologicalPerspectivesonEmotion.pdf",
        "description": "Summary of Chapter 3 from The Oxford Handbook of Affective Computing."
        },
        {
        "name": "Neuroscientific Perspectives of Emotion", "filepath": rootPath + "4-NeuroscientificPerspectivesofEmotion.pdf",
        "description": "Summary of Chapter 4 from The Oxford Handbook of Affective Computing."
        },
        {
        "name": "Ethical Issues in Affective Computing", "filepath": rootPath + "24-EthicalIssuesinAffectiveComputing.pdf",
        "description": "Summary of Chapter 24 from The Oxford Handbook of Affective Computing."
        },
      ];

      $scope.projects = allProjects;

      $scope.selectProject = function(project) {
          $scope.selectedProject = project;
      };

      /*
       * Skills and projects
       */

      $scope.skills = [
        {"name": "Engineering", "size": 1},
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

      $scope.projectCount = allProjects.length || 0; //Two insturments

    }]);
