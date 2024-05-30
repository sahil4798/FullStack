const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const todos = [
  // { title: "bath", description: "at 7 AM take a throgh bath" },
  // { title: "sing", description: "Practise singing daily for better Vocals" },
];

app.post("/add", (req, res) => {
  const { title, description } = req.body;
  todos.push({ title, description });
  // console.log(todos);
  res.json(todos);
});

app.listen(3000);
