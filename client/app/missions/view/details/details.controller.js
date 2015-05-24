'use strict';

angular.module('secretAgentsApp')
  .controller('MissionsViewDetailsController', function ($scope, $stateParams, $state) {
    $scope.mission = $stateParams.mission;
    $scope.back = function() {
      $state.go('^');
    };
    $scope.insertedAgent = '';
    $scope.freeAgents = [
    {
      photo: 'https://www.google.com.ua/images/nav_logo195.png',
      name: 'Ivan'
    },
    {
      photo: 'https://www.google.com.ua/images/nav_logo195.png',
      name: 'Sanek'
    }
    ];

    $scope.add = function() {
      $scope.mission.agents.push($scope.insertedAgent);
    };



  });
