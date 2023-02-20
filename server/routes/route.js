const express = require('express');
const router = express.Router();

//OPEN AI CONFIGURATION
const keySetUp = require('../private/key');
const openAiKey = keySetUp.myKey;
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: openAiKey,
});
const openAi = new OpenAIApi(configuration);
//END OF OPEN AI CONFIGURATION

router.post('/completion', async (req, res) => {
  const { prompt } = req.body;
  console.log(`Incoming prompt: ${prompt}`);

  const gptResponse = await openAi.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    temperature: 0.9,
    max_tokens: 900,
    top_p: 0.9,
    frequency_penalty: 1.5,
    presence_penalty: 1.5,
  });

  const responseText = gptResponse.data.choices[0].text.trim();
  console.log(`Response: ${responseText}`);

  // Replace newline characters with HTML line breaks
  const responseHtml = responseText.replace(/\n/g, '<br>');

  // Concatenate the message with the modified text

  const response = `${responseHtml}`;

  res.send(response);
});

router.get('/', (req, res) => {
  res.send('Welcome to the backend of the application');
});

module.exports = router;
