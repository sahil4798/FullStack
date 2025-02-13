const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const SECRET_KEY = "your-very-secure-secret-key";

const users = [
  { username: "jack", password: "duniyakapapa" },
  { username: "oggy", password: "legend" },
  { username: "motu", password: "chicken" },
];

app.get("/users", (req, res) => {
  const token = req.headers["authorization"];
  console.log(token);

  if (!token) {
    res.status(401).json({ message: "No token provided" });
    return;
  }

  // jwt.verify(token, SECRET_KEY, (err, decoded) => {
  //   if (err) {
  //     res.send(401).json({ message: "failed to authenticate token" });
  //     return;
  //   }
  //   res.json({
  //     message: "Protected Content",
  //     user: decoded,
  //     users: users.filter((user) => {
  //       if (user.username !== decoded.username) return user;
  //     }),
  //   });
  // });

  const decoded = jwt.verify(token, SECRET_KEY);
  const username = decoded.username;
  res.json({
    users: users.filter((u) => {
      if (u.username !== username) return true;
      else return false;
    }),
  });
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => {
    if (username === user.username && password === user.password) {
      return user;
    }
  });

  if (user) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({
      token: token,
    });
  } else {
    res.status(401).json({ message: "invalid creditentials" });
  }
});

app.listen(3000);
