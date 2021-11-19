// this -> reference to the object that is executing the current function
// 'this' in method -> obj
// 'this' in function -> global object
/* FUNCTION VS METHOD 
1) A function can be called directly by its name.
  A method consists of a code that can be called by the name of its object and its method name using 
  dot notation or square bracket notation.
2) A function can pass the data that is operated and may return the data. 	
   The method operates the data contained in a Class.
3) Data passed to a function is explicit.	
  A method implicitly passes the object on which it was called.
4) A function lives on its own.	
 A method is a function associated with an object property.
*/ 

// CODE EXAMPLE 1 (In functions)
function x() {
  function y() {
    console.log(this);
  }
  y();
}
x(); // this will output 'window' object

// CODE EXAMPLE 2 (In methods )

const object = {
  title: 'object',
  message() {
    console.log(this);
  }
}

object.message(); // this will output  const 'object'

// CODE EXAMPLE 3 (In constructor Function )

function Obj(msg) {
  this.msg = msg;
  console.log(this); // refer to object of Obj
}

const obj1 = new Obj('hey');
const obj2 = new Obj('hello');

// https://www.youtube.com/watch?v=gvicrj31JOM&t=50s
