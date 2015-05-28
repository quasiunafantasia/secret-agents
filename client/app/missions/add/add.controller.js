'use strict';

angular.module('secretAgentsApp')
  .controller('MissionsAddController', function ($scope, MissionsResource, $state) {
    $scope.mission = {};
    $scope.add = function () {
      MissionsResource.save($scope.mission).$promise
        .then(function() {
          $state.go('^.view');
        });
    };
  });
