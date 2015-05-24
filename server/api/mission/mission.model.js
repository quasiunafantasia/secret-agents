'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MissionSchema = new Schema({
  name: String,
  briefing: String,
  status: {
    type: String,
    default: 'PENDING'
  },
  agentsNum: Number,
  agents: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Mission', MissionSchema);
