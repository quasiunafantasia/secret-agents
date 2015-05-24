'use strict';

angular.module('secretAgentsApp')
  .controller('AgentsViewController', function ($scope, $http) {
    $scope.agents = [{
      name: 'asd',
      photo: 'https://upst.fwdcdn.com/temp/holidays/1933/logo_ua.gif',
      info: 'Bla-bla'
    },
    {
      name: 'asd',
      photo: 'https://upst.fwdcdn.com/temp/holidays/1933/logo_ua.gif',
      info: 'Bla-bla'
    },
    {
      name: 'asd',
      photo: 'https://upst.fwdcdn.com/temp/holidays/1933/logo_ua.gif',
      info: 'Bla-bla'
    },
    {
      name: 'asd',
      photo: 'https://upst.fwdcdn.com/temp/holidays/1933/logo_ua.gif',
      info: 'Bla-bla'
    }];
  });
