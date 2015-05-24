'use strict';

angular.module('secretAgentsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('base.agents.view', {
        url: '/view',
        parent: 'base.agents',
        templateUrl: 'app/agents/view/view.html',
        controller: 'AgentsViewController'
      });
  });
