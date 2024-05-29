const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  res.send("you have " + kidneyLength + " kidneys");
});

//Global catch
//Error-Handling MiddleWare
app.use((err, req, res, next) => {
  res.json({
    msg: "sorry something is up with sever ",
  });
});

app.listen(3000);
