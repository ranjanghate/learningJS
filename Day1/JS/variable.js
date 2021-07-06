// variable in Javascript

var name = 'Ranjan';
console.log(name);
var surname;
console.log(name, surname); // with show (Ranjan, Undefined) Undefined -> variable declared but not defined
surname = 'Ghate';
console.log(name, surname);
var marks = 98
console.log(name, surname, marks);
var Marks = 99; // case sensitive
console.log(name, surname, marks, Marks);

marks = 97; // var can be redefined
console.log(name, surname, marks);

// const num; intizializer is mandotory for const
// num = 'ninth';

const num = 'ninth';
console.log(num);

let x = 154541;
console.log(x);

{
  let num = 'sixth';
  console.log(num);
  //const scope is block level
}
