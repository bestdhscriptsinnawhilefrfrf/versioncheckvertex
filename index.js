const express = require('express');
const app = express();

// Define an endpoint /script-version that returns the script version
app.get('/script-version', (req, res) => {
  res.json({ version: "1.0.0" });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
