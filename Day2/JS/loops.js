//For loop
for (let i = 0; i < 100; i++)
  console.log(i);

// While loop
let j = 1;
while (j < 100) {
  j++;
  console.log(`j -> ${j}`);
}

// Do-while
let k = 10
do {
  k++;
  console.log(`k -> ${k}`);
} while (k < 10)

// For each

let arr = [1, 2, 3, 4, 5];

arr.forEach(function (element, index) {
  console.log(`${element} at ${index}`);
})

// let for loop

let obj = {
  name: 'raju',
  location: 'morena',
  age: `60`
};

for (let key in obj) {
  console.log(key);
}
