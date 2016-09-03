/**
 * Created by piotrzakrzewski on 03/09/16.
 */
(function () {
  'use strict';

  angular
    .module('hack')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(toastr, $scope, Service) {

    $scope.vibes = [
      [{
        "vote": "up",
        "name": "Piotr",
        "questionIndex": 2,
        "submitted_at": "2016-09-03T10:08:11.399Z"
      },
        {
          "vote": "up",
          "name": "Piotr",
          "questionIndex": 2,
          "submitted_at": "2016-09-03T10:08:11.399Z"
        }], [
        {
          "vote": "up",
          "name": "Ruslan",
          "questionIndex": 2,
          "submitted_at": "2016-09-03T10:08:11.399Z"
        },
        {
          "vote": "up",
          "name": "Ruslan",
          "questionIndex": 2,
          "submitted_at": "2016-09-03T10:08:11.399Z"
        }
      ]
    ];

    $scope.load = function () {
      Service.getVotes().then(function (data) {
        data = data['_embedded']['rh:doc'];
        toastr.success("success");
        $scope.vibes = tranformVibes(data);
      });
    };

    var tranformVibes = function (data) {
      var transformed = [];
      var i = 0;
      var index = {};
      _.forEach(data, function (vibe) {
        var name = vibe['name'];
        if (index[name] == undefined) {
          index[name] = i;
          i += 1;
          transformed.push([]);
        }
        var ind = index[name];
        transformed[ind].push(vibe);
      });
      return transformed;
    }

  }
})();

