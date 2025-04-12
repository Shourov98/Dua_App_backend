// src/routes/subCategoryRoutes.js
const express = require('express');
const router = express.Router();
const subCategoryController = require('../controllers/subCategoryController');

router.get('/subcategories', subCategoryController.fetchSubCategories);

module.exports = router;
