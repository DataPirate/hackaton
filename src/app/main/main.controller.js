(function() {
  'use strict';

  angular
    .module('hack')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(toastr, $scope, Service) {

    $scope.name = 'Piotr';
    $scope.questions = ['How do you feel?', 'How does your back feel?', 'How do your hands feel?']
    $scope.currentQuestion = 0;

    $scope.onUpVote = function() {
      console.log('up');
      Service.registerVote('up', $scope.name, $scope.currentQuestion);
      $scope.currentQuestion++;
    };

    $scope.onDownVote = function() {
      console.log('down');
      Service.registerVote('down', $scope.name, $scope.currentQuestion);
      $scope.currentQuestion++;
    };
  }
})();
