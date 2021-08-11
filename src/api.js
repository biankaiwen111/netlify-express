const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.post("/", (req, res) => {
  console.log(util.inspect(req.body, { showHidden: false, depth: null }));
  res.json(req.body);
});

app.use(`/.netlify/functions/api`, router);

// app.post("/.netlify/functions/api/agreement", (req, res) => {
//   //console.log(req.body["sections"][1]["content"]);
//   //console.log("--------------");
//   console.log(util.inspect(req.body, { showHidden: false, depth: null }));
//   res.json(req.body);
// });

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
