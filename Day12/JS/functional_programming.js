//Higher order Function:- Function which takes another function as an argument or return a function.

function x() {
  console.log('hey');
}

function y(x) {
  x();
}
// y()-> is a higher order function
// x()-> is a callback

// Write a program which take array of radius and output array of area, 
// circumference or diameter to their corresponding radius

const radiuses = [3, 4, 5 ,6]
const area = function(radius) {
  return Math.PI * radius * radius;
}

const circumference = function(radius) {
  return 2 * Math.PI * radius;
}

const diameter = function(radius) {
  return 2 * radius;
}

// METHOD 1
function calculate(arr, method) {
  const output = [];
  for(let i=0; i< arr.length; i++) {
    output.push(method(arr[i]));
  }
  return output;
}

console.log(calculate(radiuses, circumference)); // array of circumference
console.log(calculate(radiuses, area)); // array of area
console.log(calculate(radiuses, diameter)); // array of diameter

// METHOD 2 (using the map function)

console.log(radiuses.map(circumference)); // array of circumference
console.log(radiuses.map(area)); // array of area
console.log(radiuses.map(diameter)); // array of diameter

// METHOD 3 REPLECATING MAP FUNCTION

Array.prototype.calculate = function(logic) {
  const output = [];
  for(let i=0; i< this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
}

console.log(radiuses.calculate(circumference)); // array of circumference
console.log(radiuses.calculate(area)); // array of area
console.log(radiuses.calculate(diameter)); // array of diameter
