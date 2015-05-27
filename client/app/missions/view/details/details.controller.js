'use strict';

angular.module('secretAgentsApp')
  .controller('MissionsViewDetailsController', function ($scope, $stateParams, $state, AgentsResource, MissionsResource) {
    $scope.mission = $stateParams.mission;
    $scope.back = function() {
      $state.go('^');
    };
    $scope.insertedAgent = '';
    $scope.freeAgents = AgentsResource.getFreeAgents();

    $scope.missionAgents = MissionsResource.getAgents($scope.mission._id);

    $scope.missionPending = function() {
      return $scope.mission.status === 'PENDING';
    };

    $scope.missionActive = function() {
      return $scope.mission.status === 'IN PROGRESS';
    };

    $scope.startMission = function() {
      MissionsResource.start($scope.mission._id, $scope.missionAgents).$promise
      .then(function() {
        $scope.$emit('updateMission');
        $state.go('^');
      });
    };

    $scope.endMission = function() {
      MissionsResource.end($scope.mission._id).$promise
      .then(function() {
        $scope.$emit('updateMission');
        $state.go('^');
      });
    };

    $scope.addEnabled = function() {
      return $scope.missionAgents.length < $scope.mission.agentsNum;
    }

    $scope.add = function() {
      $scope.missionAgents.push($scope.insertedAgent);
    };

    $scope.removeAgent = function(index) {
      $scope.missionAgents.splice(index, 1);
    };



  });
