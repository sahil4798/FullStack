// //Async function by CallBack
// function myCallback(cb) {
//   setTimeout(() => {
//     cb("inside timeout function");
//   }, 3000);
// }

// function main(data) {
//   myCallback((d) => {
//     console.log(d);
//   });
// }

// main();
// console.log("hey there");

// //Async function by promise
// function myAsync() {
//   return new Promise(function (r) {
//     setTimeout(() => {
//       r("promise resolve after 3 sec");
//     }, 3000);
//   });
// }

// function main() {
//   myAsync().then((data) => {
//     console.log(data);
//   });
// }

// main();
// console.log("hey there");

// //Async function with async await keyword
// function myAsync() {
//   return new Promise(function (r) {
//     setTimeout(() => {
//       r("promise resolve after 3 sec");
//     }, 3000);
//   });
// }

// async function main() {
//   const res = await myAsync();
//   console.log(res);
//   console.log("hii inside async function");
// }
// main();

// console.log("hey there");
