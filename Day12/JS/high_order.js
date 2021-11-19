// 1) map()

// The map() method creates a new array populated with the results of calling a provided function on every element 
// in the calling array.

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// 2) filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const array2 = [1, 2, 3 , 4];

const filter1 = array2.filter( x => x%2 === 0 );
console.log(filter1);

// 3) reduce()
// The reduce() method executes a user-supplied “reducer” callback function on each element of the array,
// passing in the return value from the calculation on the preceding element. The final result of running the
// reducer across all elements of the array is a single value.

// REPLECATING REDUCE

Array.prototype.sum = function() {
  let ans = 0;
  for(let i=0; i< this.length; i++) {
    ans += this[i];
  }
  return ans;
}
const array3 = [1, 2, 3 , 4, 5, 6];

console.log(array3.sum());

// Using reduce()

// Reduce takes two attributes
// 1) a function which also take two attributes a temp attribute which is written from reduce and second is array iterator
// 2) intial value of temp attribue

console.log(array3.reduce( function(acc, curr){
  acc = acc + curr;
  return acc;
}, 0));

// Finding max using reduce()

console.log(array3.reduce( function(acc, curr){
  return acc > curr ? acc : curr;
}, 0));

// Map function Example 1
// Given a array of user data return the array of their full name;

const users = [ 
                { first_name: 'hari', last_name: 'ram', age: '55' },
                { first_name: 'haldi', last_name: 'ram', age: '65' },
                { first_name: 'diler', last_name: 'mehndi', age: '50' },
                { first_name: 'diler', last_name: 'mehndi', age: '50' }
              ]
console.log(users.map( (user) => user.first_name + '' +  user.last_name));

// Filter function example
console.log(users.filter( (user) => user.age > '50'));

// Reduce function example

console.log(users.reduce(function(output, user){
  if(output[user.age]) {
    output[user.age] += 1;
  }
  else {
    output[user.age] = 1;
  }
  return output;
}, {}));

// Combine 
// First of all the users who's age is less than 60

// using filter and map
console.log(users.filter( (user) => user.age < 60 ).map((user) => user.first_name));

// using only with reduce

console.log( users.reduce( function(arr, user){
  if(user.age < '60') {
    arr.push(user.first_name);
  }
  return arr;
}, []));
