const express = require("express");

const fs = require("fs");
const app = express();

app.get("/:p", (req, res) => {
  const p = req.params.p;

  fs.readFile(`./Files/${p}`, "utf8", (err, data) => {
    console.log(data);
    res.json({ data });
  });
});

const getDataFromFile = (fileName) => {
  let fetchedData;
  fs.readFile("./Files/one.txt", "utf8", (err, data) => {
    console.log("in func " + data);
    fetchedData = data;
  });
  return fetchedData;
};

app.listen(3000);
