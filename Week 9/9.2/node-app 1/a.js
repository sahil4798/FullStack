"use strict";
////assign type to a variable or constant
// let x : number =1 ;
// console.log(x);
////type of passed parameter  in typescript function
// function greet(name :string){
//     console.log("hello "+name)
// }
// greet("sahil");
// //type of return value  in typescript function
// function sum (a : number , b: number): number
// {
//   return a+b;
// }
// const add =sum(10, 5);
// console.log(add)
// console.log(typeof(add))

function legal(age) {
  if (age > 18) {
    return true;
  }
  return false;
}
const l = legal(29);
console.log(typeof l);
console.log(l);
