const express = require('express');
const router = express.Router();
const keySetUp = require('../private/key');
const openAiKey = keySetUp.myKey;
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: openAiKey,
});

const openAi = new OpenAIApi(configuration);

router.post('/completion', async (req, res) => {
  const prompt = req.body.prompt;
  const bestOf = req.body.bestOf;
  const frequencyPenalty = req.body.frequencyPenalty;
  const maxTokens = req.body.maxTokens;
  const presencePenalty = req.body.presencePenalty;
  const topP = req.body.topP;

  const openAiResponse = await openAi.createCompletion({
    model: 'davinci',
    prompt: prompt,
    temperature: 0.9,
    maxTokens: maxTokens,
    topP: topP,
    presencePenalty: presencePenalty,
    frequencyPenalty: frequencyPenalty,
    bestOf: bestOf,
  });

  res.send(openAiResponse.data);
});

router.get('/', (req, res) => {
  res.send('Welcome to the backend of the application');
});

module.exports = router;
