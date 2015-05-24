/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Agent = require('../api/agent/agent.model');
var Mission = require('../api/mission/mission.model');

var agents = [];
agents.push(new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Vova',
  active: true,
  info: 'bla-bla'
}));

agents.push(new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Vasiliy',
  active: true,
  info: 'bla-bla'
}));

agents.push(new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Zhorik',
  active: true,
  info: 'bla-bla'
}));

agents.push(new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Alexander',
  active: true,
  info: 'bla-bla'
}));

agents.push(new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Alexei',
  active: true,
  info: 'bla-bla'
}));

agents.push(new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Dima',
  active: true,
  info: 'bla-bla'
}));

agents.push(new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Vadim',
  active: true,
  info: 'bla-bla'
}));

agents.push(new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Illiya',
  active: true,
  info: 'bla-bla'
}));

agents.push(new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Kirill',
  active: true,
  info: 'bla-bla'
}));

agents.push(new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Artem',
  active: true,
  info: 'bla-bla'
}));

agents.push(new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Max',
  active: false,
  info: 'bla-bla'
}));

agents.push(new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Nikolai',
  active: false,
  info: 'bla-bla'
}));

agents.push(new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Kostya',
  active: false,
  info: 'bla-bla'
}));

agents.push(new Agent ({
  photo: 'https://avatars2.githubusercontent.com/u/8106665?v=3&s=40',
  name: 'Yulik',
  active: false,
  info: 'bla-bla'
}));

var missions = [];
missions.push(new Mission({
  name: 'Nevipolnima',
  briefing: 'Its Nevipolnima mission ',
  status: 'PENDING',
  agentsNum: 2,
  agents: [agents[0]._id, agents[1]._id]
}));


missions.push(new Mission({
  name: 'KillBIll',
  briefing: 'Its KillBIll mission ',
  status: 'IN PROGRESS',
  agentsNum: 2,
  agents: [agents[2]._id, agents[3]._id]
}));

missions.push(new Mission({
  name: 'Monkey_and_Banana',
  briefing: 'Its Monkey_and_Banana mission ',
  status: 'IN PROGRESS',
  agentsNum: 2,
  agents: [agents[4]._id, agents[5]._id]
}));

missions.push(new Mission({
  name: 'SkyForce',
  briefing: 'Its SkyForce mission ',
  status: 'ACCOMPLISHED',
  agentsNum: 3,
  agents: [agents[6]._id, agents[7]._id, agents[8]._id]
}));

missions.push(new Mission({
  name: 'HotDog',
  briefing: 'Its HotDog mission ',
  status: 'PENDING',
  agentsNum: 1,
  agents: [agents[9]._id]
}));

Agent.find({}).remove(function() {
  Agent.create.apply(Agent, agents);
});

Mission.find({}).remove(function() {
  Mission.create.apply(Mission, missions);
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
