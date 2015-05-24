'use strict';

angular.module('secretAgentsApp')
  .controller('MissionsViewController', function ($scope, $state) {

    var statusMapping = {
      PENDING: 'pending',
      'IN PROGRESS': 'progress',
      ACCOMPLISHED: 'accomplished'
    };

    $scope.filtering = {};
    $scope.missionsDislpayed = function() {
      return $state.current.name === 'base.missions.view';
    };
    $scope.missions = [{
      name: 'asd',
      photo: 'https://upst.fwdcdn.com/temp/holidays/1933/logo_ua.gif',
      briefing: 'Bla-bla',
      status: 'ACCOMPLISHED',
      _id: 123,
      agents: []
    },
    {
      name: 'asd',
      photo: 'https://upst.fwdcdn.com/temp/holidays/1933/logo_ua.gif',
      briefing: 'Bla-bla',
      status: 'IN PROGRESS',
      _id: 123,
      agents: []
    },
    {
      name: 'asd',
      photo: 'https://upst.fwdcdn.com/temp/holidays/1933/logo_ua.gif',
      briefing: 'Bla-bla',
      status: 'PENDING',
      _id: 123,
      agents: []
    },
    {
      name: 'asd',
      photo: 'https://upst.fwdcdn.com/temp/holidays/1933/logo_ua.gif',
      briefing: 'Bla-bla',
      status: 'PENDING',
      _id: 123,
      agents: []
    }];

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
