// function along with its lexical scope forms a closure

// A closure is the combination of a function bundled together (enclosed) 
// with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function’s scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.


// Closure :Function bundled with its lexical environment is known as a closure. 
// Whenever function is returned, even if its vanished in execution context but still it remembers the reference 
// it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes
//  interesting.

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y; // if just doesn't return function y, but function y along with its lexical scope i.e, closure
}

var z = x();
console.log(z);
z(); // 7

// corner case 1 : changing a value before returning 
function p() {
  var m = 7;
  function h() {
    console.log(m);
  }
  m = 125;
  return h; // if just doesn't return function y, but function y along with its lexical scope i.e, closure
}

var t = p();
console.log(t);
t(); // 125
