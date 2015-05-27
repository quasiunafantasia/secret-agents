'use strict';

var _ = require('lodash');
var Mission = require('./mission.model');
var Agent = require('./../agent/agent.model');

// Get list of missions
exports.index = function(req, res) {
  Mission.find(req.query, function (err, missions) {
    if(err) { return handleError(res, err); }
    return res.json(200, missions);
  });
};

// Get a single mission
exports.show = function(req, res) {
  Mission.findById(req.params.id, function (err, mission) {
    if(err) { return handleError(res, err); }
    if(!mission) { return res.send(404); }
    return res.json(mission);
  });
};

// Get agents on mission
exports.showAgents = function(req, res) {
  Mission.findById(req.params.id, function (err, mission) {
    if(err) { return handleError(res, err); }
    if(!mission) { return res.send(404); }
    Agent.find({
      '_id': {
        $in: mission.agents
      }
    }, function(err, agents) {
      if(err) { return handleError(res, err); }
      if(!agents) { return res.send(404); }
      res.json(200, agents);
    });
  });
};

// Creates a new mission in the DB.
exports.create = function(req, res) {
  Mission.create(req.body, function(err, mission) {
    if(err) { return handleError(res, err); }
    return res.json(201, mission);
  });
};

// Updates an existing mission in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Mission.findById(req.params.id, function (err, mission) {
    if (err) { return handleError(res, err); }
    if(!mission) { return res.send(404); }
    var updated = _.merge(mission, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, mission);
    });
  });
};

// Deletes a mission from the DB.
exports.destroy = function(req, res) {
  Mission.findById(req.params.id, function (err, mission) {
    if(err) { return handleError(res, err); }
    if(!mission) { return res.send(404); }
    mission.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.startMission = function(req, res) {
  var agentIds = req.body.map(function(agent) {
    return agent._id;
  });
  Mission.findById(req.params.id, function(err, mission) {
    if (err) return handleError(res, err);
    if (!mission) return res.send(404);
    Agent.find({
      '_id': {
        $in: agentIds
      }
    }, function(err, agents) {
      if(err) { return handleError(res, err); }
      if(!agents) { return res.send(404); }
      agents.forEach(function(agent) {
        agent.active = true;
        agent.save();
      });
      mission.status = 'IN PROGRESS';
      mission.agents = agentIds;
      mission.save();
      res.json(200, mission);
    });
  });
};

exports.endMission = function(req, res) {
  Mission.findById(req.params.id, function(err, mission) {
    if (err) return handleError(res, err);
    if (!mission) return res.send(404);
    Agent.find({
      '_id': {
        $in: mission.agents
      }
    }, function(err, agents) {
      if(err) { return handleError(res, err); }
      if(!agents) { return res.send(404); }
      agents.forEach(function(agent) {
        agent.active = false;
        agent.save();
      });
      mission.status = 'ACCOMPLISHED';
      mission.save();
      res.json(200, mission);
    });
  });
};


function handleError(res, err) {
  return res.send(500, err);
}
