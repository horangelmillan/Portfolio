const express = require('express');

// Controllers
const { showImage } = require('../controllers/managements.controller');

// Middlewares
const { takeScreenshot } = require('../middlewares/screenshots.middleware');

// Init route
const managerRoute = express.Router();

managerRoute.post('/screenshot', takeScreenshot, showImage);

module.exports = { managerRoute };