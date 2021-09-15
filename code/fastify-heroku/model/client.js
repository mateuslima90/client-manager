const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  id: String,
  username: String,
  description: String,
  owner: String,
  team: String
}, {timestamps: true});

module.exports = mongoose.model('Client', clientSchema);