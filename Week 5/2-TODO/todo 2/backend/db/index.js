const mongoose = require("mongoose");
mongoose.connect();
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todos = mongoose.model("Todos", todoSchema);

module.exports = Todos;
