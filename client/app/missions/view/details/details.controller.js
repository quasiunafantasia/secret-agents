'use strict';

angular.module('secretAgentsApp')
  .controller('MissionsViewDetailsController', function ($scope, $stateParams, $state, AgentsResource) {
    $scope.mission = $stateParams.mission;
    $scope.back = function() {
      $state.go('^');
    };
    $scope.insertedAgent = '';
    $scope.freeAgents = AgentsResource.getFreeAgents();

    $scope.add = function() {
      $scope.mission.agents.push($scope.insertedAgent);
    };



  });
