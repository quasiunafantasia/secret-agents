'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AgentSchema = new Schema({
  name: String,
  photo: String,
  active: Boolean,
  info: String
});

module.exports = mongoose.model('Agent', AgentSchema);
