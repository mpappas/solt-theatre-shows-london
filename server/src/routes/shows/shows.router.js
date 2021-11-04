const express = require('express');

const { httpLoadShowsData } = require('./shows.controller');

const showsRouter = express.Router();

showsRouter.get('/', httpLoadShowsData);

module.exports = showsRouter;
