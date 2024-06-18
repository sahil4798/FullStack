// //*********************************************enums***********************************************
// type Direction = "up"|"down"|"left"|"right";
// enum Directions  {
//     Up =3,
//     Down,
//     Left,
//     Right
// }
// function doSomething(movement :Directions ){
//     if(movement=== Directions.Up ){
//         console.log("hii")
//     }
// }

// doSomething(Directions.Up);
// console.log(Directions.Up)
// console.log(Directions.Left)



////********************************************Generic***********************************************

// type newType = string|number;

// function identity <T>(a :T){
//     return a;
// }


// const res1 = identity<string>("jack");
// const res2 = identity<number>(1234);

// //problem - 2
// type a = (number|string)[];

// function FirstElement<T>(arg : T[] ):T{ 
//     return arg[0];
// }

// const x = FirstElement<string>(["jack" , "sher", "oggy", "olly"])
// console.log(x.toUpperCase());

// type User=  {
//     name : string,
//     age: number,
// }

// const user1 = FirstElement<User>([{name : "jack" ,age : 21}, {name : "oggy" , age : 19}]);
// console.log(user1.age)


