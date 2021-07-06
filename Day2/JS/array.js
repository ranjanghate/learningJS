// Array in JS

// declaration
const num = [1, 2, 3, 4];
const fruits = ['Orange', 'Apple', 'Banana'];
const mixed = ['Hey', true, 1.4, 1];
console.log(num, fruits, mixed);

const arr = new Array('Ok', 1, 323.3);
console.log(arr);

// array function and method
console.log(arr.length) // length is property
console.log(Array.isArray(arr))

arr[0] = 'Not Ok';
console.log(arr);

let pos = num.indexOf(3);
console.log(pos, num[pos]);

// Mutating
num.push(124); // add element in last
console.log(num);
num.unshift(45); // add element to begining
console.log(num);
num.pop(); // remove element from last
console.log(num);
num.shift() // remove element from begining
console.log(num);

num.splice(1, 2); // remove two elements from 1st position
console.log(num);
num.reverse(); // revert the order of elements
console.log(num);

let nums2 = [7, 8, 9, 10];
nums2 = num.concat(nums2);
console.log(nums2);
