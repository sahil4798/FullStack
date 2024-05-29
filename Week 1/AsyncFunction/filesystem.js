console.log("checkpoint 1");
const fs = require("fs");

console.log("checkpoint 2");
fs.readFile("./text/a.txt", "utf8", (err, data) => {
  console.log("checkpoint 3");
  console.log(data);
  console.log("checkpoint 4");
});
console.log("checkpoint 5");
