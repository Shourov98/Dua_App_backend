// src/models/duaModel.js
const db = require('../database/sqliteConnection');

const getDuas = (callback) => {
  const sql = 'SELECT * FROM dua';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

module.exports = {
  getDuas,
};
