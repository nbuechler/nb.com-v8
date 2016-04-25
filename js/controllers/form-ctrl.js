// NOTE: routerApp is defined in app.js
routerApp.controller('formController', ['$scope', '$http',
    function($scope, $http) {
      $scope.default = 'The purpose of FORM is strictly educational and artistic hence any intellectual property it may be similar to is covered under fair-use. This project does not currently seek to profit and does not plan to compete with other entities. It is clearly a concept created to brand a resilient community of citizen creators. Finally, I would appreciate any feedback and suggestions. For other inquiries, please E-mail me directly - natebuechler (at) gmail (dot) com .';
      $scope.selectedProject = null;
      $scope.title = 'Fundamentally Open Source and Resilient Manufacturing (FORM)';

      var rootPath = '../content/roles/graphicDesigner/WR/';
      var tRootPath = '../content/roles/graphicDesigner/T/';
      // {"name": "", "filepath": "", "t_filepath": ""},
      var formImages = [
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_01.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_01.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_02.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_02.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_03.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_03.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_04.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_04.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_05.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_05.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_06.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_06.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_07.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_07.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_08.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_08.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_09.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_09.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_10.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_10.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_11.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_11.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_12.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_12.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_13.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_13.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_14.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_14.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_15.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_15.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_16.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_16.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_17.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_17.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_18.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_18.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_19.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_19.jpg"},
        {"name": "", "filepath": rootPath + "FORM-Brand-Guide_Page_02.jpg", "t_filepath": tRootPath + "FORM-Brand-Guide_Page_02.jpg"},
      ];

      $scope.images = formImages;

      $scope.selectImage = function(image) {
          $scope.selectedImage = image;
      };

    }]);
