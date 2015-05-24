'use strict';

angular.module('secretAgentsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('base', {
        url: '/base',
        templateUrl: 'app/base/base.html',
        controller: 'BaseController'
      });
  });
