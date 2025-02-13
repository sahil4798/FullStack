const express = require("express");

const app = express();

app.use(express.json());

const userAuthMiddleware = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "jack" || password != "duniyakapapa") {
    res.status(401).json({
      message: "Bad cretedential",
    });
  }
  next();
};

const kidneyCheckMiddleware = (req, res, next) => {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(401).json({
      message: "not get coorect input",
    });
  }
  next();
};

app.get(
  "/healthcheck",
  userAuthMiddleware,
  kidneyCheckMiddleware,
  (req, res) => {
    res.json({ message: "you are well and healthy" });
  }
);

app.post("/abc", (req, res) => {
  console.log(req.body);
  res.send("hi");
});

app.listen(3000);
