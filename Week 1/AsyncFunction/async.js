// //***********NORAAL FUNCTION********** */
// function sum(n) {
//   console.log("checkout 1");
//   let sum = 0;
//   for (let i = 0; i <= n; i++) sum = sum + n;

//   console.log("checkout 2");
//   return sum;
// }
// console.log("checkout 3");

// console.log(sum(10));
// console.log("checkout 4");

console.log("checkout 1");
function sum(n) {
  console.log("checkout 2");
  let sum = 0;
  for (let i = 0; i <= n; i++) sum = sum + n;
  console.log("checkout 3");
  return sum;
}
console.log("checkout 4");

function sumOfN(n) {
  console.log(sum(n));
}

console.log("checkout 5");
setTimeout(() => {
  console.log("checkout * ");
  sumOfN(10);
  console.log("checkout ** ");
}, 1000);
console.log("checkout 6 ");
