////*************************************Interface*************************************

// function legal(user : User ):boolean{
//  if(user.age>18)
//     return true;
// return false;
// }


// interface User{
//     firstName : string;
//     lastName : string;
//     email : string;
//     age : number;
//     bloodType? :string
// }

// const user : User = {
//     firstName : "jack",
//     lastName : "sher",
//     email : "jack@gmail.com",
//     age : 24,
// }

// console.log(legal(user));




// //****************************************type**********************************

// //syntax is same and simple as interface
// type todoType = {
//   title : string,
//   desciption : string,
//   done : boolean,
// }

// // *****************remark--> use interface as can possible untill you don't need special feauture union and intersection of type****************


// //union(|)
// type typeForPrint = string | number;
// function print(id: typeForPrint){
    //    console.log("id is "+ id)
    // }
    
    // print(1)
    // print("jack#sher");
    
    
    
// //intersection(&)
// type Person ={
//     name : string,
//     age : Number,
//     bloodType? : string,
// }

// const person1:Person =  {
//    name : "jack",
//    age : 21

// }

// type Employee = {
//     name : string,
//     department :string
// }

// const employee : Employee ={
//     name : "jacl",
//     department : "badmoshi"
// } 


// type newType =   Person & Employee;

// const newUser : newType = {
//     name : "oggy",
//     age : 19,
//     department : "olly_ka_pyarr"
// }




////****************************************array**********************************

// function printArrayElements(arr : number[]){
//   arr.map((a)=>{
//     console.log(a);
//   })
// }

// printArrayElements([1, 2, 3 , 4]);