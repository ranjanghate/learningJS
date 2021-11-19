// Block, Block scoped, shadowing

// what is block in javascript
// define by curly brackets, also known as compound statement.
// A block is use to combine multiple javascript statements into one group
// A group of javascript statement (block) is used when javascript needs a single statement
// Example :- 
if (true) {
 var a = 10;
 a *= 5;
}

// what is block scope 
// all the variable and functions we can access in a particular block
// var is not block scoped, it is functioned scoped
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}

console.log(a); // 10
// console.log(b); // Referrence Error
// console.log(c); // Referrence Error

// what is shadowing in javascript 
// Variable shadowing occurs when a variable of an inner scope is defined with the same name as a variable in the outer scope.


// shadowing with 'var'
var temp = 100;
{
  var temp = 115;
  console.log(temp); // 115
}
console.log(temp); // 115
// as var is not block scoped and var 'temp' belongs to global at line 36 the temp value over writes to 115 and
// as temp is referrencing to same memory address as of temp at line 34

// shadowing with 'let'
let temp1 = 100;
{
  let temp1 = 115;
  console.log(temp1); // 115
}
console.log(temp1); // 110

// temp1 at line 44, 49 belongs to script (outside of block) and temp1 at line 46 belongs to block

// shadowing with 'const'
const temp2 = 100;
{
  const temp2 = 115;
  console.log(temp2); // 115
}
console.log(temp2); // 110

// same reason as let

// shadowing in function work in same ways as block


// ILLEGAL shadowing

// Botton code will fail
// let a = 20;
// {
//   var a = 20;
// }

var a = 20; 
{
  let a = 20;
}

let b = 10;
{
  const b = 20;
}

// you name a 'var' type variable same as a let or const variable if it is defined in block or script,
// but visa-versa is valid
// https://www.youtube.com/watch?v=lW_erSjyMeM&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=10
// Better explaination at 16:00

// Block scope also follows lexical chain
