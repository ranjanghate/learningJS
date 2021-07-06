// Type conversion
let myVar = 34;
console.log(typeof myVar);
myVar = String(myVar);
console.log(typeof myVar);

let booleanVar = true;
console.log(typeof booleanVar);
booleanVar = String(booleanVar);
console.log(booleanVar, typeof booleanVar);
booleanVar = true;
booleanVar = Number(booleanVar);
// booleanVar = parseInt(booleanVar);
console.log(booleanVar, typeof booleanVar);

let date = new Date();
console.log(date, typeof date);

date = String(date);
console.log(date, typeof date);

let arr = [1, 2, 3, 4];
console.log(arr, arr.length, typeof arr);

arr = String(arr);
console.log(arr, arr.length, typeof arr);

let i = 8;
let j = 'xyz';

console.log(i.toString());
console.log(Number(false));
console.log(Number(j), typeof j);

// console.clear();

// Type coercion
// conversion of one type of object to a another object of a different type with similar content

let str = '698';
let num = '98';
console.log(str + num);
