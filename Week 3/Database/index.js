const mongoose = require("mongoose"); //importing mongoose

mongoose.connect(
  "mongodb+srv://SahilNextJs:l2O8bj5Xe8d84JFg@cluster0.bs1oqqy.mongodb.net/new_user_app"
);
//connection with mongoose collection

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});
//Defining the schema or model of database
//main Database was new_user_app
//we create a sub-databse in it with schema and named it users

//Database Vs Collections
//when you login on mongoDB and  on mongodb.com --> cluster(Project 0 in sahil6353)--> Collections ---> Database
//In Database we can create further more databases

const user = new User({
  name: "jack",
  email: "jack123@gmail.com",
  password: "duniyakapapa",
});
// adding a unit of data inside sub-database(users)

user.save();
//pushing the unit inside sub-database
