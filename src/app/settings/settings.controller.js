(function() {
  'use strict';

  angular
    .module('hack')
    .controller('SettingsController', SettingsController);

  /** @ngInject */
  function SettingsController(toastr, $scope, Service, $state) {
    $scope.name = "";
    $scope.profession = "";
    $scope.professions = ['Programmer', 'Construction worker', 'Pirate', 'Librarian', 'Falconer', 'Magician'];

    $scope.saveSettings = function() {
      Service.setName($scope.name);
      $state.go('home');
    };
  }
})();
