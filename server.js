const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./user/models/database');
const userController = require('./user/controllers/userController');

const PORT = 3000;

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => res.sendFile('index.html'));

app.post('/signup', userController.newUser);

app.listen(PORT, () => console.log('listening on...', PORT));
