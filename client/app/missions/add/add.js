'use strict';

angular.module('secretAgentsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('base.missions.add', {
        url: '/add',
        parent: 'base.missions',
        templateUrl: 'app/missions/add/add.html',
        controller: 'MissionsAddController'
      });
  });
