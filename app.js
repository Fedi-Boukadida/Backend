
const express = require('express');
const app = express();

// ...existing code...
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Example route
app.get('/', (req, res) => {
  res.send('Server is running');
});

module.exports = app;