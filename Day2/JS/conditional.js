// If else in JS
let age = '18';
// (==), (!=) it compares only value (===), (!==) compares values and type
if (age !== 19) {
  console.log(`Your age is ${age}`);
}
else if (age == 64) {
  console.log(`Your age is not ${age}`);
}

else {
  console.log(`Your age is not ${age}`);
}

// checking if a variable is defined or not

if (typeof (vari) !== 'undefined') {
  console.log('Vari is defined');
}
else {
  console.log('Vari is not defined');
}

// switch is JS

switch (age) {
  case 18:
    console.log('You are 18');
    break;
  case 19:
    console.log('You are 19');
    break;
  case 18:
    console.log('You are 20');
    break;

  default:
    console.log(`You are ${age}`)
    break;
}
