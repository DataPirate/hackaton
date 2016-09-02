(function() {
  'use strict';

  angular
    .module('hack')
    .factory('Service', Service);

  /** @ngInject */
  function Service(Restangular) {
    var service = {};

    service.registerVote = function(vote) {
      var baseVotes = Restangular.all('votes');
      baseVotes.post({vote:vote});
    };

    return service;
  }
})();
