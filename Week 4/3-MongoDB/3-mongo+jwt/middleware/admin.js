const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

async function authenticateAdmin(req, res, next) {
  const token = req.headers.authorization;
  const word = token.split(" ");
  const jwtToken = word[1];

  if (!jwtToken) {
    return res.status(400).json({ message: "please provide token" });
  }

  jwt.verify(jwtToken, JWT_SECRET, (err, user) => {
    if (err) {
      res.status(400).json({ message: "inncorrect token" });
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateAdmin;
