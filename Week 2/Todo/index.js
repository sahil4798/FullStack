const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This is Todo");
});
app.post("/conversation", (req, res) => {
  console.log(req.body);
  //   res.send({ msg: "2+2=4" });
  res.json(req.body);
});

app.listen(3001, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", 3001);
});
