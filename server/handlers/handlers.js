const express = require('express');
const router = express.Router();
// Router module imported from express

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/about', (req, res) => {
  res.send('About Page');
});

router.get('/contact', (req, res) => {
  res.send('Contact Page');
});

module.exports = router;
