const express = require('express');
const bodyParser = require('body-parser');
const { registerUser, validateUser } = require('./../db/index.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/register/', (req, res) => {
  console.log(req.body);
  registerUser(req.body);
  res.send('Register!');
});

// app.get('/validate/')

app.listen(3000, () => console.log('App listening on port 3000'));
