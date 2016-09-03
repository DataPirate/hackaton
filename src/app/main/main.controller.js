(function() {
  'use strict';

  angular
    .module('hack')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(toastr, $scope, Service) {

    $scope.questions = ['How do you feel?', 'How does your back feel?', 'How do your hands feel?']
    $scope.currentQuestion = 0;

    $scope.onUpVote = function() {
      var name = Service.getName();
      console.log('up');
      Service.registerVote('up', name , $scope.questions[$scope.currentQuestion]);
      $scope.currentQuestion++;
    };

    $scope.onDownVote = function() {
      var name = Service.getName();
      console.log('down');
      Service.registerVote('down', name, $scope.questions[$scope.currentQuestion]);
      $scope.currentQuestion++;
    };
  }
})();
