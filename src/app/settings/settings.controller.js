(function() {
  'use strict';

  angular
    .module('hack')
    .controller('SettingsController', SettingsController);

  /** @ngInject */
  function SettingsController(toastr, $scope, Service) {
    $scope.name = "";
    $scope.profession = "";
    $scope.professions = ['Programmer', 'Construction worker', 'Pirate', 'Librarian', 'Falconer', 'Magician'];


  }
})();
