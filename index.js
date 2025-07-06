const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello, Wordd!</h1>");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running");
});
