const express = require('express');
const cors = require('cors'); // Make sure to import cors
const categoryRoutes = require('./routes/categoryRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes');
const duaRoutes = require('./routes/duaRoutes');

const app = express();

// Single CORS configuration
app.use(cors({
  origin: ['http://192.168.0.105:3000', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/api', categoryRoutes);
app.use('/api', subCategoryRoutes);
app.use('/api', duaRoutes);

module.exports = app;