const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my simple status API"
  });
});

// Status route
app.get("/status", (req, res) => {
  res.json({
    status: "running"
  });
});

// About route
app.get("/about", (req, res) => {
  res.json({
    project: "simple-status-api",
    purpose: "A basic API built with Node.js and Express for practice"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});