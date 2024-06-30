const express = require("express");
const cors = require("cors");
const Todos = require("./db/index");
const {
  createTodoValidationSchema,
  updateTodoValidationSchema,
} = require("./types");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  console.log(req.body);
  const { title, description } = req.body;
  const r = createTodoValidationSchema.safeParse({ title, description });
  if (!r.success) {
    return res.status(411).json({ message: "invalid input" });
  }
  const todo = await Todos.create({ title, description, completed: false });
  res.json({ message: "New todo added" });
});

app.get("/todos", async (req, res) => {
  const todos = await Todos.find({});
  res.json(todos);
});

app.post("/todo/:id", async (req, res) => {
  const id = req.params.id;
  const r = updateTodoValidationSchema.safeParse({ id: id });
  if (!r.success) {
    return res.status(411).json({ message: "invalid id" });
  }
  try {
    const updatedTodo = await Todos.findByIdAndUpdate(
      { _id: id },
      { completed: true }
    );
  } catch (error) {
    return res.status(411).json({ message: error.message });
  }
  //   console.log(updatedTodo);
  res.json({ message: "marked as done" });
});

app.listen(3000, () => {
  console.log("listining on 3000");
});
