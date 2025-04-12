// src/routes/duaRoutes.js
const express = require('express');
const router = express.Router();
const duaController = require('../controllers/duaController');

router.get('/duas', duaController.fetchDuas);

module.exports = router;
