const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  username: { type: String, required: [true, 'Username is required'], unique: true },
  description: { type: String, required: true },
  owner: { type:String, required: true },
  team: { type: String, required: true }
});

module.exports = mongoose.model('Client', clientSchema);