const express = require('express');
const router = express.Router();
const Prompt = require('../database_configs/prompt');
const Response = require('../database_configs/responses');

// Security Packages for User Authentication and Authorization (JWT)
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// objects of the user schema from the database to run mongoose queries
const UserModel = require('../database_configs/user');

// OPEN AI CONFIGURATION
const keySetUp = require('../private/key');
const openAiKey = keySetUp.myKey;
const { Configuration, OpenAIApi } = require('openai');
const user = require('../database_configs/user');
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

    max_tokens: 1000,
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

  const response = `${responseHtml}`;

  res.send(response.trim());
});

router.get('/', (req, res) => {
  res.send('Welcome to the backend of the application');
});
// new routes for user sign up and login below
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user object
  const newUser = new UserModel({
    name: name,
    email: email,
    password: hashedPassword,
  });

  try {
    // Save the new user to the database
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }

  // log when the new user is created
  console.log(`New user created @ ${Date.now()}: ${newUser}`);
});

// Asynchronous api endpoint for the emailValidation function from front end to check for existing email
router.get('/users', async (req, res) => {
 
  const allUsers = await UserModel.find({}).lean();
  // assign await query to allUsers varible, used lean method because this was a mongoose query object
 
  // await and execute the query to get an array of JavaScript objects
  res.send(allUsers);
});

module.exports = router;
