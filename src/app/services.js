(function() {
  'use strict';

  angular
    .module('hack')
    .factory('Service', Service);

  /** @ngInject */
  function Service(Restangular) {
    var service = {};
    var baseVotes = Restangular.all('votes');
    var _name = 'Piotr';

    service.registerVote = function(vote, name, question) {
      var currentTime = new Date();
      baseVotes.post({vote:vote, name:name, question:question, submitted_at:currentTime });
    };

    service.getVotes = function() {
      return baseVotes.customGET("");
    };

    service.setName = function (name) {
      _name = name;
    };

    service.getName = function () {
      return _name;
    };

    return service;
  }
})();
