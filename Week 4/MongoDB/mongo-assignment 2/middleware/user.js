const { User } = require("../db");

async function authenticateUser(req, res, next) {
  const { username, password } = req.headers;
  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(401).json({ message: "unautherized access" });
  }
  next();
}

module.exports = authenticateUser;
