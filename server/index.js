//Entry Point for the server side of the application - routes imported from external file
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
//Module Imports local and external
const path = require('path');
const router = require('./routes/route');
//router external fille with all the routes
const cors = require('cors');
const bodyParser = require('body-parser');

const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
// End of Module Imports

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  asyncHandler(async (req, res, next) => {
    console.log('Request was made to: ' + req.originalUrl);
    next();
  })
);

//End of MIDDLEWARE

//Router Middleware
app.use('/', router);
//End of Router Middleware

//DATABASE CONNECTION

const connectionString = require('./database_configs/database');
mongoose.connect(connectionString.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection = mongoose.connection;

dbConnection.once('opening connection', () => {
  console.log(
    `Successfully connected to database: ${connectionString.connectionString}`
  );
});

dbConnection.on('error', (err) => {
  console.log(`Error connecting to database: ${err}`);
});

//END OF DATABASE CONNECTION

app.listen(PORT, () => {
  console.log(
    `Express Backend Up and Running on Port: ${PORT}, press Ctrl+C to terminate.`
  );
});
