const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const todos = [
  { title: "Bath", description: "Take bath at sharp 9:00 AM", id: "1" },
  { title: "GYM", description: "Workout at sharp 7:00 PM", id: "2" },
  {
    title: "Walking",
    description: "Take fresh air outside around 6:00 PM",
    id: "3",
  },
  {
    title: "Music",
    description: "Listing Kali's melting during waling ",
    id: "4",
  },
];

app.get("/gettodos", (req, res) => {
  res.json(todos);
});

app.post("/settodos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.json({ data: newTodo });
});

app.listen("3000");
