'use strict';

angular.module('secretAgentsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('base.missions.view', {
        url: '/view',
        parent: 'base.missions',
        templateUrl: 'app/missions/view/view.html',
        controller: 'MissionsViewController'
      });
  });
