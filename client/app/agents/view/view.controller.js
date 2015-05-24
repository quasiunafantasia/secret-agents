'use strict';

angular.module('secretAgentsApp')
  .controller('AgentsViewController', function ($scope, AgentsResource) {
    $scope.agents = AgentsResource.query();
  });
