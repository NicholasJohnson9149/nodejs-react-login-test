const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/register/', (req, res) => {
  console.log(req.body);
  res.send('Register!');
});

app.listen(3000, () => console.log('App listening on port 3000'));
