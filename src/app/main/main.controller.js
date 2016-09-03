(function() {
  'use strict';

  angular
    .module('hack')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(toastr, $scope, Service) {

    $scope.name = '';

    $scope.onUpVote = function() {
      console.log('up');
      Service.registerVote('up', $scope.name);
      toastr.success("Thanks for feedback! Good to hear:)");
    };

    $scope.onDownVote = function() {
      console.log('down');
      Service.registerVote('down', $scope.name);
      toastr.success("Thanks for feedback!");
    };
  }
})();
