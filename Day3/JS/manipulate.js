// Manipulating DOM using JS
// window is JS global object

//  All window property and functions
// alert, prompt, confirm, innerHeight, innerWidth, scrollX, scrollY, location, history, go

let a = window;
console.log(window);

alert('Don\'t do this'); // alert is the method of window object

a = prompt('No No No'); // prompt will take input from user and assign it value to a
console.log(a);

a = confirm("are you sure");
console.log(a);

let a = window.innerHeight;
console.log(a);
a = scrollY;
console.log(a);

a = location.href;
console.log(a);
a = location.toString();

location.href = 'https://www.google.com/';  // redirects to google.com

// window.history or history
// history.go(-1) or any integer 
