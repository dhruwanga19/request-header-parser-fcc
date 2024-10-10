const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();
app.use(cors());

function getIp(req) {
  const forwaredFor = req.headers["x-forwarded-for"];
  if (forwaredFor) {
    return forwaredFor.split(",")[0];
  } else {
    return req.connection.remoteAddress;
  }
}

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: getIp(req),
    language: req.get("Accept-Language"),
    software: req.get("User-Agent"),
  });
});

module.exports.handler = serverless(app);
