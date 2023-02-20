//SCHEMA representing a prompt for the database to store

const mongoose = require('mongoose');
const promptSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Prompts', promptSchema);
