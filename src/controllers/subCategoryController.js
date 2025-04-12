// src/controllers/subCategoryController.js
const SubCategory = require('../models/subCategoryModel');

const fetchSubCategories = (req, res) => {
  SubCategory.getSubCategories((err, subCategories) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(subCategories);
  });
};

module.exports = {
  fetchSubCategories,
};
