'use strict';

var express = require('express');
var controller = require('./mission.controller');

var router = express.Router();

router.get('/:id/agents', controller.showAgents);
router.post('/:id/start', controller.startMission);
router.post('/:id/end', controller.endMission);
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
