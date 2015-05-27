'use strict';

angular.module('secretAgentsApp')
  .controller('MissionsViewController', function ($scope, $state, MissionsResource) {

    var statusMapping = {
      PENDING: 'pending',
      'IN PROGRESS': 'progress',
      ACCOMPLISHED: 'accomplished'
    };

    $scope.filtering = {};
    $scope.missionsDislpayed = function() {
      return $state.current.name === 'base.missions.view';
    };

    $scope.missions = MissionsResource.query();

    $scope.$on('updateMission', function() {
      $scope.missions = MissionsResource.query();

    });

    $scope.isMissionDisplayed = function(mission) {
      var filteringExists = _($scope.filtering).any(function(val) {
        return val;
      });
      if (filteringExists) {
        return $scope.filtering[statusMapping[mission.status]];
      } else {
        return true;
      }
    };
  });
