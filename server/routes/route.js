const express = require('express');
const axios = require('axios');
const router = express.Router();

// Import API key
const apiKey = require('../private/apiKey').myApiKey;

// Handle POST request with prompt
router.post('/prompt', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    // Send request to OpenAI API with prompt
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci/completions',
      {
        prompt: prompt,
        // prompt is the text that the user inputs and the model will use to generate a response based on the prompt
        temperature: 1.0,
        // temperature is a value between 0 and 1 that controls the randomness of the model's predictions. A temperature of 0 is completely deterministic and a temperature of 1 is completely random.
        max_tokens: 1000,
        // max_tokens is the maximum number of tokens the model will generate. The model will stop generating once it hits this limit.
        n: 3,
        // n is the number of different completions the model will return. The model will return the n completions that it deems to be the most likely.
        model: 'text-davinci-003',
        // model is the model that will be used to generate the response. The model is a string that is the name of the model. The model can be found in the OpenAI API documentation.
        top_p:1,
        // top_p is a value between 0 and 1 that controls the diversity of the model's predictions. A value of 1 means that the model will only generate tokens that it deems to be the most likely. A value of 0.5 means that the model will generate tokens that it deems to be the most likely or the second most likely.
        frequency_penalty: 1,
        // frequency_penalty is a value between 0 and 1 that penalizes new tokens based on whether they appear in the text so far. A value of 0 has no effect, a value of 1 prevents the model from repeating any part of the prompt.
        presence_penalty: 0.3,
        // presence_penalty is a value between 0 and 1 that penalizes new tokens based on whether they appear in the text so far. A value of 0 has no effect, a value of 1 prevents the model from repeating any part of the prompt.
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    // Send response from OpenAI API back to frontend
    res.json({ output: response.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
