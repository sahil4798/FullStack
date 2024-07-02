import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

const JWT_SECRET = "MYSECRETJWTSECRET";

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  //logic to verify the username and password with database with prisma client
  const token = jwt.sign({ id: 1 }, JWT_SECRET);
  //   res.json({ message: "Signin success", token: token });
  res.cookie("token", token);
  res.json({ message: "Signin success" });
});

app.get("/user", (req, res) => {
  //   const auth = req.headers.authorization;
  //   const token = auth?.split(" ")[1] || "";

  const token = req.cookies.token;

  const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
  console.log(decoded);
  res.json({ id: decoded.id });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "");
  res.json({ message: "Logpout successfully" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(3000, () => {
  console.log("server running at 3000");
});
