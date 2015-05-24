'use strict';

angular.module('secretAgentsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('base.agents.add', {
        url: '/add',
        parent: 'base.agents',
        templateUrl: 'app/agents/add/add.html',
        controller: 'AgentsAddController'
      });
  });
