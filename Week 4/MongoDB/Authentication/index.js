const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const SECRET_PASSWORD = "hvcvscusacvucsbjk8289o(O@#U&";
const users = [
  { id: 1, username: "jack", password: "duniyakapapa" },
  { id: 2, username: "ogggy", password: "pyariolly" },
];
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  res.send("Sugnup page");
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => {
    if (u.username === username && u.password === password) return true;
    else return false;
  });
  if (!user) {
    return res.status(402).json("Invalid Cretidintial");
  }
  const token = jwt.sign({ username }, SECRET_PASSWORD);
  res.json({ token });
});

function authorizationWithJWT(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.sendStatus(401).json({ message: "no token" });

  jwt.verify(token, SECRET_PASSWORD, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "incvalid token" });
    }
    req.user = user;
    next();
  });
}

app.get("/protected", authorizationWithJWT, (req, res) => {
  res.json({ user: req.user });
});

app.listen(3000, () => {
  console.log("server is listing on 3000 port");
});
