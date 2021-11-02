// Hoisting is a phenomenon in javascript where you can access the variable before you initialize them

// Even before code start executing, memory is allocate to each and every variable


var temp = 2;
function getName() {
  console.log('Hello');
}

getName();
console.log(temp);
console.log(getName);


/* 
  In execution context during memory component
  2 Golden Rules are followed:
  1. Variable declarations are scanned and are made undefined
  2. Function declarations are scanned and are made available
*/

/* 
  Difference between undefined and not define in javascript

  Code Example
    console.log(x);
    var x = 2;
  Here the output will 
    undefined
  Because memory will be reserved for the variable x during memory allocation phase

  Code Example
    console.log(x);
  Here the output will 
    not defined
  Because there is no variable x for which memory will be reserved during memory allocation phase
*/



// Arrow function vs regular function
console.log(regular_func); // this will return the whole regular_func function code block
regular_func(); // this will log 'Hello' in console

console.log(arrow_func); // this will return undefined (because arrow_func is treated as var before its defination it will refer to undefined)
arrow_func(); // this will return error that arrow_func is not a function

console.log(assign_func); // this will return undefined (because assign_func is treated as var before its defination it will refer to undefined)
assign_func(); // this will return error that assign_func is not a function

var arrow_func = 2;
function regular_func() {
  console.log('Hello');
}

var arrow_func = () => 'Hello this is arrow_func';

var assign_func = function() {
  'This is a function assigned to var'
};
