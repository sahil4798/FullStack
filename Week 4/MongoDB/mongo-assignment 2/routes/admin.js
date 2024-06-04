const express = require("express");
const authenticateAdmin = require("../middleware/admin");
const { Course, Admin } = require("../db");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = { ...req.body };
  const newAdmin = await Admin.findOne({ username });
  if (newAdmin) {
    return res.json({ message: "Admin already exist" });
  }
  const admin = await Admin.create({ username, password });
  res.json({ message: "New admin created" });
});

router.post("/courses", authenticateAdmin, async (req, res) => {
  const newCourse = { ...req.body };
  const course = await Course.create(newCourse);
  res.json({ message: "New course added", id: course._id });
});

router.get("/courses", authenticateAdmin, async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
});

module.exports = router;
