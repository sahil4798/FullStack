////********************Object with key******************** */

////********************Record******************** */
// type ObjectType = {
//   [key: string]: string;
// };

// type objectType1 = Record<string, { name: string; age: number }>;
// const keyObject: objectType1 = {
//   a: { name: "s", age: 1 },
//   b: { name: "s", age: 1 },
//   c: { name: "s", age: 1 },
//   d: { name: "s", age: 1 },
// };

// console.log(keyObject.a);
// console.log(keyObject["a"]);
// console.log(keyObject["a"].age);//little bit hectic

// //********************Map******************** */
// interface UserType {
//   name: string;
//   age: number;
//   password: string;
// }
// const objectWithKey = new Map<string, UserType>();

// objectWithKey.set("a", { name: "s", age: 1, password: "abcd" });
// objectWithKey.set("b", { name: "b", age: 1, password: "xyz" });

// const user = objectWithKey.get("a");
