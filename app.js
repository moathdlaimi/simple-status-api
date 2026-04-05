const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my simple status API"
  });
});

// Status route
app.get("/status", (req, res) => {
  res.json({
    status: "running - Socket test"
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
console.log("Server Starting");
//app.listen(PORT, () => {
  //console.log(`Server is running on http://localhost:${PORT}`);
//});
app.listen(PORT, "127.0.0.1", () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
  });
console.log("This line should still appear, but server should remain running");