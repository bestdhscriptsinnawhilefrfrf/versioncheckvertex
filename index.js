const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/script-version', (req, res) => {
  res.json({ version: "1.0.0" });
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});