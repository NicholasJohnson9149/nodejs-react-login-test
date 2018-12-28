const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

// app.get('/register', (req, res) => res.send('Register!'));

app.listen(3000, () => console.log('App listening on port 3000'));
