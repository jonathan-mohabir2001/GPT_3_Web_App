const express = require('express');
const router = express.Router();
const Prompt = require('../database_configs/prompt');
const Response = require('../database_configs/responses');

// OPEN AI CONFIGURATION
const keySetUp = require('../private/key');
const openAiKey = keySetUp.myKey;
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: openAiKey,
});
const openAi = new OpenAIApi(configuration);
// END OF OPEN AI CONFIGURATION

router.post('/completion', async (req, res) => {
  const { prompt } = req.body;
  console.log(`Incoming prompt: ${prompt}`);

  // Check if there is a previous prompt and response
  const previousResponse = await Response.findOne().sort({ created_at: -1 });
  let newPrompt = prompt;
  if (previousResponse) {
    const previousPrompt = await Prompt.findById(previousResponse.prompt_id);
    if (previousPrompt) {
      newPrompt = `${previousPrompt.prompt} ${previousResponse.response} ${prompt}`;
    }
  }

  // Fine-tuned model properties for better conversational flow
  const gptResponse = await openAi.createCompletion({
    model: 'text-davinci-003',
    //powerful davinci model for text generation and completion

    prompt: newPrompt,
    //prompt is the text that the model will use to generate a response

    temperature: 0.5,
    //temperature is the randomness of the model, the higher the temperature the more random the model will be

    max_tokens: 750,
    //max_tokens is the maximum number of tokens that the model will generate

    top_p: 0.9,

    //top_p is the probability that the model will use a token, the higher the top_p the more likely the model will use a token

    frequency_penalty: 1.2,

    //frequency_penalty is the probability that the model will use a token, the higher the frequency_penalty the more likely the model will use a token
    presence_penalty: 1.2,

    //presence_penalty is the probability that the model will use a token, the higher the presence_penalty the more likely the model will use a token
  });

  const responseText = gptResponse.data.choices[0].text.trim();
  console.log(`Response: ${responseText}`);

  // Replace newline characters with HTML line breaks
  const responseHtml = responseText;

  // Save the current prompt and response
  const newPromptObj = new Prompt({ prompt });
  await newPromptObj.save();
  const newResponseObj = new Response({
    prompt_id: newPromptObj._id,
    response: responseHtml,
  });
  await newResponseObj.save();

  // Concatenate the message with the modified text
  const response = `${responseHtml}`;

  res.send(response.trim());
});

router.get('/', (req, res) => {
  res.send('Welcome to the backend of the application');
});

module.exports = router;
