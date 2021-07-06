// String in JS
const name = 'HelloWorld';
const msg = 'Hey';
// concatination

console.log(name + msg);
console.log(name.concat(msg, 'ok', 'nice'));

// Case functions
console.log(msg.toLowerCase());
console.log(msg.toUpperCase());
console.log(msg.length);

// Indexing

console.log(name[4]);
console.log(name.indexOf('loW'));
// return first occurence of substring or -1 if not exist
console.log(name.lastIndexOf('o'));
// return last occurence of substring or -1 if not exist

// Miscellanous
console.log(name.charAt(5));
console.log(name.endsWith('ld'));
console.log(name.includes('llo'));
console.log(name.substring(1, 25));
// anything greater than name.length is name.length
console.log(name.slice(-4));
// return substr of last 4 elements
console.log(name.split('o'));

console.log(name.replace('ll', '00'));
console.log(name.replace('pp', '00'));
// return same string if 'pp' not present


// console.clear();
// Template literals
let fruits = ['Apple', 'Orange', 'Mango'];
let mypara = `Hello ${name}
              <h1> you like ${fruits[0]}</h1>
              <h1> you like ${fruits[1]}</h1>
              <h1> you like ${fruits[2]}</h1>
              ` ;
console.log(mypara);
document.body.innerHTML = mypara;
// console.clear();