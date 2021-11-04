const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const showsRouter = require('./routes/shows/shows.router');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/shows/all-shows', showsRouter);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
