const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ipaddress,
    language: req.get("Accept-Language"),
    software: req.get("User-Agent"),
  });
});

module.exports.handler = serverless(app);
