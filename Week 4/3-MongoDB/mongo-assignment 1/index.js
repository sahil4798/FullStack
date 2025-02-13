const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const url =
  "mongodb+srv://SahilNextJs:l2O8bj5Xe8d84JFg@cluster0.bs1oqqy.mongodb.net/app";
mongoose.connect(url);

const UserShema = new mongoose.Schema({
  username: String,
  password: String,
  purchase: [],
});
const AdminShema = new mongoose.Schema({
  username: String,
  password: String,
});
const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
});

const User = mongoose.model("Users", UserShema);
const Admin = mongoose.model("Admins", AdminShema);
const Course = mongoose.model("courses", CourseSchema);

// const user = new User({ username: "oggy", password: "pyariolly" });
// user.save();
// const admin = new Admin({ username: "jack", password: "duniyakapapa" });
// admin.save();
// const course = new Course({
//   title: "AI",
//   price: 7500,
//   description: "AI course with best project",
// });
// course.save();

async function authenticateAdmin(req, res, next) {
  const { username, password } = req.headers;
  const admin = await Admin.findOne({ username, password });
  //   console.log(admin);
  if (!admin) {
    return res.status(401).json({ message: "unautherized access" });
  }
  next();
}

async function authenticateUser(req, res, next) {
  const { username, password } = req.headers;
  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(401).json({ message: "unautherized access" });
  }
  next();
}

//admin

app.post("/admin/signup", async (req, res) => {
  const { username, password } = { ...req.body };
  const admin = await Admin.findOne({ username });
  if (admin) {
    return res.json({ message: "User already exist" });
  }
  const newAdmin = new Admin({ username, password });
  newAdmin.save();
  res.json({ message: "New admin created" });
});

app.get("/admin/courses", authenticateAdmin, async (req, res) => {
  const courses = await Course.find({});
  //   console.log(courses);
  res.json(courses);
});

app.post("/admin/courses", authenticateAdmin, (req, res) => {
  //   console.log(req.body);
  const newCourse = { ...req.body };
  const course = new Course(newCourse);
  course.save();
  res.json({ message: "New course added" });
});

//user

app.post("/users/signup", (req, res) => {
  const newUser = req.body;
  const user = new User(newUser);
  user.save();
  res.json({ message: "New user added" });
});

app.get("/users/courses", authenticateUser, async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
});

app.post("/users/courses/:courseId", authenticateUser, async (req, res) => {
  const a = req.params.courseId;
  const { username, password } = req.headers;
  const user = await User.findOne({ username });
  const id = user.id;
  const updatedUser = await User.findByIdAndUpdate(id, {
    $push: { purchase: a },
  });
  res.json({ message: "Course purchased successfully" });
});

app.get("/users/purchasedCourses", authenticateUser, async (req, res) => {
  const { username, password } = req.headers;
  const users = await User.findOne({ username });
  const coursesId = users.purchase;
  //   console.log(coursesId);
  //   const courses = coursesId.map(async (id) => {
  //     const course = await Course.findOne({ _id: id });
  //     return course;
  //   });
  let courses = [];
  for (let i = 0; i < coursesId.length; i++) {
    const course = await Course.findOne({ _id: coursesId[i] });
    courses.push(course);
  }
  console.log(courses);
  res.json({ message: courses });
});

app.listen("3000", () => {
  console.log("Lising on 3000");
});
