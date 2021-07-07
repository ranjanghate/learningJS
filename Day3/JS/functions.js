// Functions in Javascript

//basic declaration and args
function add(x, y) {
  return x + y;
}

console.log(add(3, 5));

// function declaration using var

let fun = function (a, b) {
  return a + b;
}

console.log(fun(5, '777'));

// function JS object 

let obj = {
  name: 'raju',
  hobby: function (a) {
    return `raju likes to ${a}`;
  }
};

console.log(obj.hobby('play football'));


// Understanding scope in JS

// var i = 19;
{
  var i = 25;
  console.log(i);
}
function f() {
  let i = 9;
  console.log(i);
}
f();
console.log(i);
