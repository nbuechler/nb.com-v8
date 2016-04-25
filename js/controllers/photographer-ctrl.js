// NOTE: routerApp is defined in app.js
routerApp.controller('photographerController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'Images are shown below. Select one to see the image.';
      $scope.selectedProject = null;
      $scope.title = 'Photographer Projects';

      var rootPath = '../content/roles/photographer/WR/';
      var tRootPath = '../content/roles/photographer/T/';
      // {"name": "", "filepath": "", "t_filepath": ""},
      var photographerImages = [
        {"name": "", "filepath": rootPath + "fw1.jpg", "t_filepath": tRootPath + "fw1.jpg"},
        {"name": "", "filepath": rootPath + "fw2.jpg", "t_filepath": tRootPath + "fw2.jpg"},
        {"name": "", "filepath": rootPath + "fw3.jpg", "t_filepath": tRootPath + "fw3.jpg"},
        {"name": "", "filepath": rootPath + "fw4.jpg", "t_filepath": tRootPath + "fw4.jpg"},
        {"name": "", "filepath": rootPath + "fw5.jpg", "t_filepath": tRootPath + "fw5.jpg"},
        {"name": "", "filepath": rootPath + "fw6.jpg", "t_filepath": tRootPath + "fw6.jpg"},
        {"name": "", "filepath": rootPath + "fw7.jpg", "t_filepath": tRootPath + "fw7.jpg"},
        {"name": "", "filepath": rootPath + "fw8.jpg", "t_filepath": tRootPath + "fw8.jpg"},
        {"name": "", "filepath": rootPath + "fw9.jpg", "t_filepath": tRootPath + "fw9.jpg"},
        {"name": "", "filepath": rootPath + "Landscape01.jpg", "t_filepath": tRootPath + "Landscape01.jpg"},
        {"name": "", "filepath": rootPath + "Landscape02.jpg", "t_filepath": tRootPath + "Landscape02.jpg"},
        {"name": "", "filepath": rootPath + "Landscape03.jpg", "t_filepath": tRootPath + "Landscape03.jpg"},
        {"name": "", "filepath": rootPath + "Landscape04.jpg", "t_filepath": tRootPath + "Landscape04.jpg"},
        {"name": "", "filepath": rootPath + "Landscape05.jpg", "t_filepath": tRootPath + "Landscape05.jpg"},
        {"name": "", "filepath": rootPath + "Landscape06.jpg", "t_filepath": tRootPath + "Landscape06.jpg"},
        {"name": "", "filepath": rootPath + "Landscape07.jpg", "t_filepath": tRootPath + "Landscape07.jpg"},
        {"name": "", "filepath": rootPath + "Landscape08.jpg", "t_filepath": tRootPath + "Landscape08.jpg"},
        {"name": "", "filepath": rootPath + "Landscape09.jpg", "t_filepath": tRootPath + "Landscape09.jpg"},
        {"name": "", "filepath": rootPath + "Landscape10.jpg", "t_filepath": tRootPath + "Landscape10.jpg"},
        {"name": "", "filepath": rootPath + "Landscape11.jpg", "t_filepath": tRootPath + "Landscape11.jpg"},
        {"name": "", "filepath": rootPath + "Landscape12.jpg", "t_filepath": tRootPath + "Landscape12.jpg"},
        {"name": "", "filepath": rootPath + "Landscape13.jpg", "t_filepath": tRootPath + "Landscape13.jpg"},
        {"name": "", "filepath": rootPath + "Landscape14.jpg", "t_filepath": tRootPath + "Landscape14.jpg"},
        {"name": "", "filepath": rootPath + "Landscape15.jpg", "t_filepath": tRootPath + "Landscape15.jpg"},
        {"name": "", "filepath": rootPath + "Landscape16.jpg", "t_filepath": tRootPath + "Landscape16.jpg"},
        {"name": "", "filepath": rootPath + "misc01.jpg", "t_filepath": tRootPath + "misc01.jpg"},
        {"name": "", "filepath": rootPath + "misc02.jpg", "t_filepath": tRootPath + "misc02.jpg"},
        {"name": "", "filepath": rootPath + "misc03.jpg", "t_filepath": tRootPath + "misc03.jpg"},
        {"name": "", "filepath": rootPath + "misc04.jpg", "t_filepath": tRootPath + "misc04.jpg"},
        {"name": "", "filepath": rootPath + "misc05.jpg", "t_filepath": tRootPath + "misc05.jpg"},
        {"name": "", "filepath": rootPath + "misc06.jpg", "t_filepath": tRootPath + "misc06.jpg"},
        {"name": "", "filepath": rootPath + "misc07.jpg", "t_filepath": tRootPath + "misc07.jpg"},
        {"name": "", "filepath": rootPath + "misc08.jpg", "t_filepath": tRootPath + "misc08.jpg"},
        {"name": "", "filepath": rootPath + "misc09.jpg", "t_filepath": tRootPath + "misc09.jpg"},
        {"name": "", "filepath": rootPath + "misc10.jpg", "t_filepath": tRootPath + "misc10.jpg"},
        {"name": "", "filepath": rootPath + "misc11.jpg", "t_filepath": tRootPath + "misc11.jpg"},
        {"name": "", "filepath": rootPath + "misc12.jpg", "t_filepath": tRootPath + "misc12.jpg"},
        {"name": "", "filepath": rootPath + "misc13.jpg", "t_filepath": tRootPath + "misc13.jpg"},
        {"name": "", "filepath": rootPath + "misc14.jpg", "t_filepath": tRootPath + "misc14.jpg"},
        {"name": "", "filepath": rootPath + "misc15.jpg", "t_filepath": tRootPath + "misc15.jpg"},
        {"name": "", "filepath": rootPath + "misc16.jpg", "t_filepath": tRootPath + "misc16.jpg"},
        {"name": "", "filepath": rootPath + "misc17.jpg", "t_filepath": tRootPath + "misc17.jpg"},
        {"name": "", "filepath": rootPath + "misc18.jpg", "t_filepath": tRootPath + "misc18.jpg"},
        {"name": "", "filepath": rootPath + "misc19.jpg", "t_filepath": tRootPath + "misc19.jpg"},
        {"name": "", "filepath": rootPath + "misc20.jpg", "t_filepath": tRootPath + "misc20.jpg"},
        {"name": "", "filepath": rootPath + "misc21.jpg", "t_filepath": tRootPath + "misc21.jpg"},
        {"name": "", "filepath": rootPath + "misc22.jpg", "t_filepath": tRootPath + "misc22.jpg"},
        {"name": "", "filepath": rootPath + "misc23.jpg", "t_filepath": tRootPath + "misc23.jpg"},
        {"name": "", "filepath": rootPath + "misc24.jpg", "t_filepath": tRootPath + "misc24.jpg"},
        {"name": "", "filepath": rootPath + "misc25.JPG", "t_filepath": tRootPath + "misc25.jpg"},
        {"name": "", "filepath": rootPath + "misc26.JPG", "t_filepath": tRootPath + "misc26.jpg"},
        {"name": "", "filepath": rootPath + "misc27.JPG", "t_filepath": tRootPath + "misc27.jpg"},
        {"name": "", "filepath": rootPath + "misc28.JPG", "t_filepath": tRootPath + "misc28.jpg"},
        {"name": "", "filepath": rootPath + "misc29.JPG", "t_filepath": tRootPath + "misc29.jpg"},
        {"name": "", "filepath": rootPath + "pan1.jpg", "t_filepath": tRootPath + "pan1.jpg"},
        {"name": "", "filepath": rootPath + "pan2.jpg", "t_filepath": tRootPath + "pan2.jpg"},
        {"name": "", "filepath": rootPath + "pan3.jpg", "t_filepath": tRootPath + "pan3.jpg"},
        {"name": "", "filepath": rootPath + "pan4.jpg", "t_filepath": tRootPath + "pan4.jpg"},
        {"name": "", "filepath": rootPath + "pan5.jpg", "t_filepath": tRootPath + "pan5.jpg"},
        {"name": "", "filepath": rootPath + "portrait01.jpg", "t_filepath": tRootPath + "portrait01.jpg"},
        {"name": "", "filepath": rootPath + "portrait02.jpg", "t_filepath": tRootPath + "portrait02.jpg"},
        {"name": "", "filepath": rootPath + "portrait03.jpg", "t_filepath": tRootPath + "portrait03.jpg"},
        {"name": "", "filepath": rootPath + "portrait04.jpg", "t_filepath": tRootPath + "portrait04.jpg"},
        {"name": "", "filepath": rootPath + "portrait05.jpg", "t_filepath": tRootPath + "portrait05.jpg"},
        {"name": "", "filepath": rootPath + "portrait06.jpg", "t_filepath": tRootPath + "portrait06.jpg"},
        {"name": "", "filepath": rootPath + "portrait07.jpg", "t_filepath": tRootPath + "portrait07.jpg"},
        {"name": "", "filepath": rootPath + "portrait08.jpg", "t_filepath": tRootPath + "portrait08.jpg"},
      ];

      $scope.images = photographerImages;

      $scope.selectImage = function(image) {
          $scope.selectedImage = image;
      };

    }]);
