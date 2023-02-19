//Router File for handling all the requests

const express = require('express');
const axios = require('axios');
const router = express.Router();

//API Keys
const keyImport = require('../configs/myKey'); // require the key from the configs folder
const apiKey = keyImport.apiKey; // assign the key to a variable
//End of API Keys

//OPEN AI SETUP
const { OpenAIApi } = require('openai');
const openai_api = new OpenAIApi(apiKey);
//END OF OPEN AI SETUP

//ROUTES
router.get('/', (req, res) => {
  res.send('Welcome to the backend of the application');
});

router.post('/answers', async (req, res) => {});

//End of ROUTES
module.exports = router;
