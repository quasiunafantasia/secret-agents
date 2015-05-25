'use strict';

angular.module('secretAgentsApp')
  .factory('AgentsResource', function ($resource) {
    function createRes(agetntID) {
      return $resource('/api/agents/:id', {
        id: agetntID
      }, {
        update: {
          method: 'UPDATE'
        }
      });

    }

    return {
      get: function(id, params) {
        return createRes(id).get(params);
      },
      query: function(params) {
        return createRes().query(params);
      },
      update: function(id, params) {
        return createRes(id).update(params);
      },
      save: function(params) {
        return createRes().save(params);
      },
      delete: function(id, params) {
        return createRes(id).delete(params);
      },
      getFreeAgents: function() {
        return createRes().query({active: false});
      }
    }

  });
