// FUNCTION STATEMENT aka declaration

function a() {
  console.log(`this is a example of function statement`);
}

// FUNCTION EXPRESSION

var b = function() {
  console.log(`this is a example of function expression`)
}

// DIFFERRENCE BETWEEN FUNCTION EXPRESSION AND STATEMENT
// the difference is in hoisting

// a(); output -->  (a is called)
// b(); output -->  (TypeError: b is not a function)
// a; output -->  (code of function a)
// b; output -->  undefine
// function a() {
//   console.log('a is called');
// }

// var b = function {
//   console.log('b is called');
// }


// ANONYMOUS FUNCTION
// a function without a name, and they do not have their own identity. they are used as values

// function () {
//   console.log(`Anonymous function`);
// }
// This will give syntax error: function statement require a function name

// NAMED FUNCTION EXPRESSION

var c = function xyz () {
  console.log(xyz) // this will ouput the code of xyz() function
}

c(); // will call the function
// xyz(); // it will give Referrence Type Error: xyz is not defined, because xyz is not created in the outer scope
// but it is created as a local variable its scope will be inside the function xyz
// KEY POINT var 'c' scope is outer scope (here it is global scope) and function xyz scope is local scope

// PARAMETERS AND ARGUMENTS

// values which we pass in function are called arguments
// labels or identifer which recieves those values are called parameters

function test(a, b, c) { // a, b and c parameters
  console.log(a + b + c);
}

test(1, 2, 3); // 1, 2 and 3 are arguments

// FIRST CLASS FUNCTION aka FIRST CLASS CITIZEN
// the ability to use functions as values is called FIRST CLASS FUNCTIONS and can be pass to / return from a functions

function main() {
  return function () {
    console.log('this is first class function phenomenon');
  }
}

var first_class_function = main();


// ##########################################################################################
// For Revision
// Function statement / Function Declaration : the function is normally defined and can be used later on
// Function expression : the function is first created and assigned to a variable so that it can be called by its variable name and unless it is defined, it cannot be executed otherwise it throws out "Uncaught TypeError"

// Anonymous function : function where there is no need to define name for the function, it just can be assigned to variable

// Named function : Normal function with its name assigned to a variable !!In this case you cannot call function by its name in outer scope!! (Scope Chain)

// first class Functions / first class citizens : 
// 1) used as values
// 2) can be passed as argument
// 3) can be executed inside a closured function
// 4) can be taken as return
