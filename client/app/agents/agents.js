'use strict';

angular.module('secretAgentsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('base.agents', {
        url: '/agents',
        parent: 'base',
        templateUrl: 'app/agents/agents.html',
        controller: 'AgentsController'
      });
  });
