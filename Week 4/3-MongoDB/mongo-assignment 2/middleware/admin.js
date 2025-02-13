const { Admin } = require("../db/index");

async function authenticateAdmin(req, res, next) {
  const { username, password } = req.headers;
  const admin = await Admin.findOne({ username, password });
  //   console.log(admin);
  if (!admin) {
    return res.status(401).json({ message: "unautherized access" });
  }
  next();
}

module.exports = authenticateAdmin;
