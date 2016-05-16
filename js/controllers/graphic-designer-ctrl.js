// NOTE: nbApp is defined in app.js
nbApp.controller('graphicDesignerController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Images are shown below. Select one to see the image.';
      $scope.selectedProject = null;
      $scope.title = 'Graphic Design Projects';

      var rootPath = '../content/roles/graphicDesigner/WR/';
      var tRootPath = '../content/roles/graphicDesigner/T/';
      // {"name": "", "filepath": "", "t_filepath": ""},
      var graphicDesignerImages = [
        {"name": "", "filepath": rootPath + "omegahorizon-logo-01-bw.png", "t_filepath": rootPath + "omegahorizon-logo-01-bw.png"},
        {"name": "", "filepath": rootPath + "omegahorizon-logo-01-blue-221D5B.png", "t_filepath": rootPath + "omegahorizon-logo-01-blue-221D5B.png"},
        {"name": "", "filepath": rootPath + "omegahorizon-logo-01-purple-411D4F.png", "t_filepath": rootPath + "omegahorizon-logo-01-purple-411D4F.png"},
        {"name": "", "filepath": rootPath + "omegahorizon-logo-01-bw-no-txt.png", "t_filepath": rootPath + "omegahorizon-logo-01-bw-no-txt.png"},
        {"name": "", "filepath": rootPath + "omegahorizon-logo-01-blue-221D5B-no-txt.png", "t_filepath": rootPath + "omegahorizon-logo-01-blue-221D5B-no-txt.png"},
        {"name": "", "filepath": rootPath + "omegahorizon-logo-01-purple-411D4F-no-txt.png", "t_filepath": rootPath + "omegahorizon-logo-01-purple-411D4F-no-txt.png"},
        {"name": "", "filepath": rootPath + "Logovfinal-mark-bw-1.jpg", "t_filepath": tRootPath + "Logovfinal-mark-bw-1.jpg"},
        {"name": "", "filepath": rootPath + "Logovfinal-mark-color-1.jpg", "t_filepath": tRootPath + "Logovfinal-mark-color-1.jpg"},
        {"name": "", "filepath": rootPath + "Logovfinal-mark-bw-2.jpg", "t_filepath": tRootPath + "Logovfinal-mark-bw-2.jpg"},
        {"name": "", "filepath": rootPath + "Logovfinal-mark-color-2.jpg", "t_filepath": tRootPath + "Logovfinal-mark-color-2.jpg"},
        {"name": "", "filepath": rootPath + "circle-final-1.jpg", "t_filepath": tRootPath + "circle-final-1.jpg"},
        {"name": "", "filepath": rootPath + "circle-final-2.jpg", "t_filepath": tRootPath + "circle-final-2.jpg"},
        {"name": "", "filepath": rootPath + "circle-final-s1-1.jpg", "t_filepath": tRootPath + "circle-final-s1-1.jpg"},
        {"name": "", "filepath": rootPath + "circle-final-s1-4.jpg", "t_filepath": tRootPath + "circle-final-s1-4.jpg"},
        {"name": "", "filepath": rootPath + "web_logo_spade-v1.jpg", "t_filepath": tRootPath + "web_logo_spade-v1.jpg"},
        {"name": "", "filepath": rootPath + "web_logo_spade-v2.jpg", "t_filepath": tRootPath + "web_logo_spade-v2.jpg"},
        {"name": "", "filepath": rootPath + "web_scorpion-alumni-network-logo_gray.jpg", "t_filepath": tRootPath + "web_scorpion-alumni-network-logo_gray.jpg"},
        {"name": "", "filepath": rootPath + "web_scorpion-alumni-network-logo_orange.jpg", "t_filepath": tRootPath + "web_scorpion-alumni-network-logo_orange.jpg"},
      ];

      $scope.images = graphicDesignerImages;

      $scope.selectImage = function(image) {
          $scope.selectedImage = image;
      };

      /*
       * Skills and projects
       */

      $scope.skills = [
        {"name": "Illustrator","size": 1},
        {"name": "InDesign", "size": 1},
        {"name": "Photoshop", "size": 1},
        {"name": "Flash", "size": 1},
        {"name": "AfterEffects", "size": 1},
        {"name": "Dreamweaver", "size": 1},
        {"name": "Bridge", "size": 1},
        {"name": "Acrobat", "size": 1},
        {"name": "Motion Graphics", "size": 1},
        {"name": "Web Graphics", "size": 1},
        {"name": "Books", "size": 1},
        {"name": "Newsletters", "size": 1},
        {"name": "Posters", "size": 1},
        {"name": "Banners", "size": 1},
        {"name": "Fliers", "size": 1},
        {"name": "Logos", "size": 1},
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

      $scope.projectCount = graphicDesignerImages.length + 4 || 0; /* Four mega projects*/

    }]);
