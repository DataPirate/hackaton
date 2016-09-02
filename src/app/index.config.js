(function() {
  'use strict';

  angular
    .module('hack')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, RestangularProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

    RestangularProvider.setBaseUrl('http://127.0.0.1:8080/hack');

  }

})();
