const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const url =
  "mongodb+srv://SahilNextJs:l2O8bj5Xe8d84JFg@cluster0.bs1oqqy.mongodb.net/app";
mongoose.connect(url);

const JWT_SECRET = "NCIBWSVIUQBEO*!#*#RTG#FB";

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

//admin
app.use("/admin", adminRouter);
//user
app.use("/users", userRouter);

app.listen("3000", () => {
  console.log("Lising on 3000");
});

module.exports = JWT_SECRET;
