const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/sum", (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  res.send(sum.toString());

  // res.json({ message: "hello from backed" });
});

app.get("/intrest", (req, res) => {
  const { princple, rate, time } = req.query;
  const simpleIntrest = (princple * rate * time) / 100;
  res.send(simpleIntrest.toString());
});

app.listen(3000);
