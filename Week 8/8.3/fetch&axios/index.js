const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
  res.send("homepage");
});

app.post("/todos", async (req, res) => {
  console.log("post request comming");
  //   console.log(req.headers);
  console.log(req.body);
  res.send("post");
});

app.listen(3000);
