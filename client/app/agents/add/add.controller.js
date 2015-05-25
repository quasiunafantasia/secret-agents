'use strict';

angular.module('secretAgentsApp')
  .controller('AgentsAddController', function ($scope, $state, AgentsResource) {
    $scope.agent = {};
    $scope.add = function () {
      AgentsResource.save($scope.agent).$promise
      .then(function() {
        $state.go('base.agents.view');
      });
    };
  });
