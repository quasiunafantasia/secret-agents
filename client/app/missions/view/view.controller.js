'use strict';

angular.module('secretAgentsApp')
  .controller('MissionsViewController', function ($scope, $http) {

    var statusMapping = {
      PENDING: 'pending',
      'IN PROGRESS': 'progress',
      ACCOMPLISHED: 'accomplished'
    };

    $scope.filtering = {};

    $scope.missions = [{
      name: 'asd',
      photo: 'https://upst.fwdcdn.com/temp/holidays/1933/logo_ua.gif',
      briefing: 'Bla-bla',
      status: 'ACCOMPLISHED'
    },
    {
      name: 'asd',
      photo: 'https://upst.fwdcdn.com/temp/holidays/1933/logo_ua.gif',
      briefing: 'Bla-bla',
      status: 'IN PROGRESS'
    },
    {
      name: 'asd',
      photo: 'https://upst.fwdcdn.com/temp/holidays/1933/logo_ua.gif',
      briefing: 'Bla-bla',
      status: 'PENDING'
    },
    {
      name: 'asd',
      photo: 'https://upst.fwdcdn.com/temp/holidays/1933/logo_ua.gif',
      briefing: 'Bla-bla',
      status: 'PENDING'
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
