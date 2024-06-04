const mongoose = require("mongoose");

//Schema for User
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});
//Schema for Admin
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});
//Schema for Courses
const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
});

//creating collection of Users
const User = mongoose.model("Users", UserSchema);
//creating collection of Admins
const Admin = mongoose.model("Admins", AdminSchema);
//creating collection of Courses
const Course = mongoose.model("Courses", CourseSchema);

module.exports = { User, Admin, Course };

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
