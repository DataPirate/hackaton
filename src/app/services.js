(function() {
  'use strict';

  angular
    .module('hack')
    .factory('Service', Service);

  /** @ngInject */
  function Service(Restangular) {
    var service = {};
    var baseVotes = Restangular.all('votes');

    service.registerVote = function(vote, name, question) {
      var currentTime = new Date();
      baseVotes.post({vote:vote, name:name, question:question, submitted_at:currentTime });
    };

    service.getVotes = function() {
      return baseVotes.customGET("");
    };

    return service;
  }
})();
