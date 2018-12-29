const express = require('express');
const bodyParser = require('body-parser');
const { registerUser, validateUser } = require('./../db/index.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/register/', (req, res) => {
  registerUser(req.body, () => {
    res.status(200);
    res.send('User registered!');
  });
});

app.get('/validate/', (req, res) => {
  validateUser(req.query, ([ document ]) => {
    if (document.password === req.query.password) {
      res.status(200);
      res.send({ message:'User Validated!', username: req.query.username });
    } else {
      res.status(401);
      res.send('Unauthorized');
    }
  });
});

app.listen(3000, () => console.log('App listening on port 3000'));
