// src/models/subCategoryModel.js
const db = require('../database/sqliteConnection');

const getSubCategories = (callback) => {
  const sql = 'SELECT * FROM sub_category';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

module.exports = {
  getSubCategories,
};
