const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username !== "jack" || password !== "duniyakapapa") {
    res.status(400).json({
      message: "invalid cretedentials",
    });
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      message: "wrong input",
    });
    return;
  }

  res.send("Healthy ho app");
});

app.listen(3000);

//query  in URL ?n=1  --> req.query.n
//Header by postman/form --> req.headers
//body  by postman/form --> req.body
