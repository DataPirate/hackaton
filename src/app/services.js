(function() {
  'use strict';

  angular
    .module('hack')
    .factory('Service', Service);

  /** @ngInject */
  function Service(Restangular) {
    var service = {};
    var baseVotes = Restangular.all('votes');

    service.registerVote = function(vote, name) {
      var currentTime = new Date();
      baseVotes.post({vote:vote, name:name, submitted_at:currentTime });
    };

    service.getVotes = function() {
      return baseVotes.get();
    };

    return service;
  }
})();
