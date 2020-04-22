const express = require('express');
const create = require('./routes/add_weight');
const fetch = require('./routes/get_data');
const users = require('./routes/users');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const { drop, createTable, clearTable } = require('./mysql/mysql');
// drop('weight');
// createChecksTable('weight');
// clearTable('weight');
// createUsersTable();
const app = express();

app.use(express.static(path.join(__dirname, '../', 'client', 'build', 'index.html')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/fetch', fetch);
app.use('/create', create);
app.use('/users', users);

app.get('/', (req, res) => {
  console.log('reached server');
});

const portConnection = process.env.PORT || 5000;

app.listen(portConnection);

console.log(`Server connected to port ${portConnection}`);
