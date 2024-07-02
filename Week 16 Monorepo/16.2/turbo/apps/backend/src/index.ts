import express from "express";
import { BACKEND_URL } from "@repo/common/config";

console.log(BACKEND_URL);
console.log("hii there");

const app = express();

app.get("/", (req, res) => {
  return res.send("Full HP");
});

app.listen(4003);
