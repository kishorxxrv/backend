require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 5000; // Use the value from the environment variable or default to 5000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('kishor');
});

app.get('/login', (req, res) => {
    res.send('<h1> This is my log in page </h>');
});

app.get('/youtube', (req, res) => {
    res.send('<h2>this is our youtube section </h2>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
