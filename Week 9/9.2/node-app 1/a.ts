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


// function legal(age: number): boolean{
//     if(age>18){
//         return true;
//     }
//     return false
// }
// const l = legal(29);
// // const l: boolean = legal(29);
// console.log(typeof(l))
// console.log(l)

////type of function  which is passed as parameter to another
////basically function type is same as the function return 
////and if passed function have any parameter then we have to specify them too , 
////i.e func :(a:number , b : string) => return_type_of_func
function runAfter1sec(func:()=> void):void {
    setTimeout(() => {
      func();
    }, 2000);
  }
  
  function print():void {
    console.log("hello");
  }
  runAfter1sec(print);
  