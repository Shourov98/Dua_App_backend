// src/controllers/categoryController.js
const Category = require('../models/categoryModel');

const fetchCategories = (req, res) => {
  Category.getCategories((err, categories) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(categories);
  });
};

module.exports = {
  fetchCategories,
};
