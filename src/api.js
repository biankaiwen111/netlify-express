const express = require("express");
const serverless = require("serverless-http");
const util = require("util");
const app = express();
const router = express.Router();

app.get("*", (req, res) => {
  res.send("Page not found!");
});

app.post("*", (req, res) => {
  res.send("incorrect post");
});

app.listen(3000, () => {
  console.log("listen on port 3000");
});

module.exports = app;
module.exports.handler = serverless(app);
