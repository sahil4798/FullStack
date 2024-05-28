const express = require("express");
const app = express();

let noOfReq = 0;

const countRequestMiddleware = (req, res, next) => {
  noOfReq++;
  next();
};

app.get("/", countRequestMiddleware, (req, res) => {
  res.send("hii Number of Request are " + noOfReq);
});

app.post("/abc", countRequestMiddleware, (req, res) => {
  res.send("response to post request");
});

app.listen(3000);
