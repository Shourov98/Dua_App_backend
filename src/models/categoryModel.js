// src/models/categoryModel.js
const db = require('../database/sqliteConnection');

const getCategories = (callback) => {
  const sql = 'SELECT * FROM category';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

module.exports = {
  getCategories,
};
