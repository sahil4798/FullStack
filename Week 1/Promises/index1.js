// const fs = require("fs");

// function myAsync(cb) {
//   fs.readFile("a.txt", "utf-8", (errr, data) => {
//     cb(data);
//   });
// }

// function onDone(data) {
//   console.log(data);
// }

// myAsync(onDone);
// console.log("hey");

////*************************BY PROMISE****************** */

// console.log("checkpoint 1");
// const fs = require("fs");

// function myAsync() {
//   console.log("checkpoint 2");
//   return new Promise(function (resolve) {
//     console.log("checkpoint 3");
//     fs.readFile("a.txt", "utf-8", (errr, data) => {
//       resolve(data);
//     });
//   });
// }
// console.log("checkpoint 4");

// function onDone(data) {
//   console.log("checkpoint  5");
//   console.log(data);
// }
// console.log("checkpoint 6");

// myAsync().then(onDone);
// console.log("hey");
// console.log("checkpo int 7");

////*************************PROMISE  indiviually****************** */

const p = new Promise((r) => {
  setTimeout(() => {
    r("hey ");
  }, 1000);
});

const onDone = () => {
  console.log(p);
};
console.log(p);
p.then(onDone);
