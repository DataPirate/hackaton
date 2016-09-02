(function() {
  'use strict';

  angular
    .module('hack')
    .factory('Service', Service);

  /** @ngInject */
  function Service(Restangular) {
    var service = {};

    service.registerVote = function(vote) {
      Restangular.one('/votes').post({vote:vote});
    }

    return service;
  }
})();
