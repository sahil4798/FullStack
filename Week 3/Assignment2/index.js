// const express = require("express");
// const responseTime = require("response-time");
// const app = express();

// app.use(responseTime());

// app.get("/", (req, res) => {
//   const responseTime = res.get("X-Response-Time");
//   res.send("hii Number of Request are " + responseTime);
// });

// app.post("/abc", (req, res) => {
//   const responseTime = res.get("X-Response-Time");
//   res.send("response to post request" + responseTime);
// });

// app.listen(3000);

const express = require("express");
const app = express();

// Middleware to measure response time
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const end = Date.now();
    const responseTime = end - start;
    console.log(`${req.method} ${req.originalUrl} - ${responseTime}ms`);
  });
  next();
});

// Define your routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.post("/", (req, res) => {
  for (let i = 0; i < 10; i++) {}
  res.json("Hello, World!");
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
