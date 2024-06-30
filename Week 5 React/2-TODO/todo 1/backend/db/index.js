const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://SahilNextJs:l2O8bj5Xe8d84JFg@cluster0.bs1oqqy.mongodb.net/todos-app"
);
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todos = mongoose.model("Todos", todoSchema);

module.exports = Todos;
