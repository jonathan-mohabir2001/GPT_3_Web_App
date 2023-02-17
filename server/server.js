// Entry Point: node server.js

// Routes external
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const router = require('./handlers/handlers.js');
// router variable assigened to the exported module from handlers.js

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT} stop with ctrl + c`);
});
