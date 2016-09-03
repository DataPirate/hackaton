(function() {
  'use strict';

  angular
    .module('hack')
    .factory('Service', Service);

  /** @ngInject */
  function Service(Restangular) {
    var service = {};
    var baseVotes = Restangular.all('votes');

    service.registerVote = function(vote, name, questionIndex) {
      var currentTime = new Date();
      baseVotes.post({vote:vote, name:name, questionIndex:questionIndex, submitted_at:currentTime });
    };

    service.getVotes = function() {
      return baseVotes.get();
    };

    return service;
  }
})();
