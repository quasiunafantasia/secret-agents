'use strict';

angular.module('secretAgentsApp')
  .factory('MissionsResource', function ($resource) {
    function createRes(agetntID) {
      return $resource('/api/missions/:id', {
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
      getAgents: function(id) {
        var res = $resource('/api/missions/:id/agents', {id: id});
        return res.query();
      }
    }

  });
