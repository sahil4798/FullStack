import express from "express";

const app = express();
app.use(express.json());

import mainRouter from "./routes/index";

app.use("/", mainRouter);

app.listen(3000, () => {
  console.log("Listing at port 3000");
});
