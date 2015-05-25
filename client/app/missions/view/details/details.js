'use strict';

angular.module('secretAgentsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('base.missions.view.details', {
        url: '/details',
        parent: 'base.missions.view',
        templateUrl: 'app/missions/view/details/details.html',
        controller: 'MissionsViewDetailsController',
        params: {
          mission: null
        }
      });
  });
