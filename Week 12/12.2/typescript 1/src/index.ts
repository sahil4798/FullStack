// function addAge(u1: user, u2: user) {
//   return u1.age + u2.age;
// }

// interface user {
//   name: string;
//   age: number;
// }

// const ageSum = addAge({ name: "jack", age: 21 }, { name: "oggy", age: 19 });
// // console.log(ageSum);

// type x = (number | string)[];
// function getFirstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// const a = getFirstElement([1, 2, 3, 4]);
// const b = getFirstElement(["a", "b", "c", "d"]);
// console.log(typeof b);
// console.log(b.toUpperCase());

// ///********************** pick********************** */

// interface User {
//   id: number;
//   username: string;
//   name: string;
//   age: number;
//   password: string;
// }

// type updatedUserData = Pick<User, "name" | "age" | "password">;

// function updateUser(user: updatedUserData) {
//   console.log(user.name + user.age + user.password);
// }

// // updateUser({id : 1 ,username : "jack" ,name : "jack" , age : 21, password :"duniyakapapa"})
// updateUser({
//   name: "jack",
//   age: 21,
//   password: "duniyakapapa",
// });

// ///********************** Partial********************** */

// interface User {
//   id: number;
//   username: string;
//   name: string;
//   age: number;
//   password: string;
// }

// type updatedUserData = Pick<User, "name" | "age" | "password">;

// type updatedPartialUserData = Partial<updatedUserData>;

// function updateUser(user: updatedPartialUserData) {
//   console.log(user.password);
//   console.log(user.name);
// }

// updateUser({ password: "duniyakapapa", name: "jack" });

// ///********************** Readonlly********************** */

// const a: number[] = [1, 2, 3, 4, 5];
// a[0] = 10;
// console.log(a);

// type x = readonly number[];
// const b: x = [1, 2, 3, 4, 5];
// // b[0] = 10;//error

// interface objectType {
//   readonly name: string;
//   readonly age: number;
// }
// const l: objectType = { name: "jack", age: 21 };
// // l.name = "oggy"; //error

// interface objectType2 {
//   name: string;
//   age: number;
// }

// const m: Readonly<objectType2> = { name: "jack", age: 21 };
// // l.name = "oggy"; //error

// // ///********************** Excludes********************** */

// type OptionType = "up" | "down" | "left" | "right";

// type excluededOption = Exclude<OptionType, "up" | "left">;

// function eventprinter(e: excluededOption) {
//   console.log(e);
// }

// // eventprinter("up");//error
// eventprinter("down");
