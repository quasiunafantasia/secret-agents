/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Agent = require('../api/agent/agent.model');
var Mission = require('../api/mission/mission.model');

var agents = [];
agents[0] = new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Zhorik',
  active: true,
  info: 'bla-bla'
});

agents[1] = new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Vasiliy',
  active: true,
  info: 'bla-bla'
});

agents[2] = new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Zhorik',
  active: false,
  info: 'bla-bla'
});

var mission = new Mission({
  name: 'Nevipolnima',
  briefing: 'tu tu tututu tu',
  status: 'PENDING',
  agentsNum: 2,
  agents: [agents[0]._id, agents[1]._id]
});

Agent.find({}).remove(function() {
  Agent.create.apply(Agent, agents);
});

Mission.find({}).remove(function() {
  Mission.create(mission);
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
