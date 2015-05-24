'use strict';

angular.module('secretAgentsApp')
  .factory('AgentsResource', function ($resource) {
    var res = $resource('/api/agents/:id', {
      id: '@_id'
    }, {
      update: {
        method: 'UPDATE'
      }
    });

    return {
      get: function(params) {
        return res.get(params);
      },
      query: function(params) {
        return res.query(params);
      },
      update: function(params) {
        return res.update(params);
      },
      save: function(params) {
        return res.save(params);
      },
      delete: function(params) {
        return res.delete(params);
      }
    }

  });
