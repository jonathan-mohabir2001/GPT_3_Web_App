//SCHEMA FOR RESPONSES to be stored in the database for conversation to have a flow for the  Davinci model to respond to

const mongoose = require('mongoose');
const responseSchema = new mongoose.Schema({
  response: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Responses', responseSchema);
