/**
 * Created by piotrzakrzewski on 03/09/16.
 */
(function() {
  'use strict';

  angular
    .module('hack')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(toastr, $scope, Service) {
    $scope.load = function () {
      console.log(Service.getVotes());
    }

  }
})();

