var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
  id: String,
  username: String,
  description: String,
  owner: String,
  team: String
}, {timestamps: true});

mongoose.model('Client', clientSchema);