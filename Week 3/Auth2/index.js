const express = require("express");
const mongoose = require("mongoose"); //importing mongoose

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://SahilNextJs:l2O8bj5Xe8d84JFg@cluster0.bs1oqqy.mongodb.net/new_user_app"
);
//connection with mongoose collection

const User = mongoose.model("Users", {
  name: String,
  username: String,
  password: String,
});
//Defining the schema or model of database

app.get("/", (req, res) => {
  res.send("Landed");
});

app.post("/signup", async (req, res) => {
  const { username, password, name } = req.body;

  const isExist = await User.findOne({ username: username });

  if (isExist) {
    res.status(401).json({ message: "User already exist" });
    return;
  }
  const user = new User({
    username,
    password,
    name,
  });
  user.save();
  res.json({ message: "congrats signup page" });
});

app.listen(3000);
