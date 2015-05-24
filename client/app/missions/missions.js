'use strict';

angular.module('secretAgentsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('base.missions', {
        url: '/missions',
        parent: 'base',
        templateUrl: 'app/missions/missions.html',
        controller: 'MissionsController'
      });
  });
