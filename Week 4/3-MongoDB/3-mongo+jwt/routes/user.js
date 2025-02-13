const express = require("express");
const { User, Course } = require("../db");
const authenticateUser = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const newUser = await User.findOne({ username });
  if (newUser) {
    return res.json({ message: "User already exist" });
  }
  const user = User.create({ username, password });
  res.json({ message: "New user added" });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) {
    res.status(400).json({ message: "User not exsists" });
  }
  const token = jwt.sign({ username }, JWT_SECRET);
  res.json({ token });
});

router.get("/courses", async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
});

router.post("/courses/:courseId", authenticateUser, async (req, res) => {
  const courseId = req.params.courseId;
  const { username } = req.user;
  const user = await User.findOneAndUpdate(
    { username },
    { $push: { purchasedCourses: courseId } }
  );
  console.log(user);
  res.json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", authenticateUser, async (req, res) => {
  const { username } = req.user;
  const user = await User.findOne({ username });
  const courses = await Course.find({ _id: { $in: user.purchasedCourses } });
  res.json({ message: courses });
});

module.exports = router;
