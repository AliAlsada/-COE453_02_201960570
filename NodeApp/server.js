const express = require('express');
const path = require('path');
const app = express();

// Serve any static files
app.use(express.static(path.join(__dirname, '.')));

// Handle GET requests to the root URL by sending index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
