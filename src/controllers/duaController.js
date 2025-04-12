// src/controllers/duaController.js
const Dua = require('../models/duaModel');

const fetchDuas = (req, res) => {
  Dua.getDuas((err, duas) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(duas);
  });
};

module.exports = {
  fetchDuas,
};
