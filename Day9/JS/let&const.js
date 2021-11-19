// let and const declarations are hoisted

console.log(b); // undefined
console.log(a); // Reference Error: can't access 'a' before initialization
let a = 10;
var b = 100;

// temporal dead zone is a phase between a variable is hoisted till it's initizalized with some value
// when ever you try to excess a variable in temporal deadzone it gives Referrence error

// let and const are store in seperate storage, unlike var(which is store in window object)

console.log(window.b) // 10
console.log(window.a) // undefined
console.log(window.x) // undefined x is a random variable (not declared or defined anywhere)

let a = 15;  // Syntax Error: Identifier 'a' has already been declared
// Syntax error means code doesn't even run, it just rejected upfront

const p = 15; // you have to declare and define at same time

// const p;
// p = 10;
// Syntax Error : Missing intializer in const declaration


// const b = 10
// b = 100;
// Type error: assignment to constant variable 



// Difference between syntax error, referrence error and type error

// syntax error ... violation of JS syntax
// type error ...  while trying to re-initialize const variable
// reference error ... while trying to access variable which is not there in global memory.

// -> let and const are hoisted. we cant use them before initialization is result of "temporal dead zone".
// -> js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"
// -> level of strictness ... var<<let<<const.
// -> var //no temporal dead zone, can redeclare and re-initialize, stored in GES
//     let //use TDZ, can't re-declare, can re-initialize, stored in separate memory
//     const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory
// -> syntax error is similar to compile error. while type and reference error falls under run time error.
// -> syntax error ... violation of JS syntax
//     type error ...  while trying to re-initialize const variable
//     reference error ... while trying to access variable which is not there in global memory.
  