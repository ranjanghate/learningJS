// local storage remains until not cleared

// setting local storage
localStorage.setItem('name', 'ranjan');
localStorage.setItem('temp', 'delete');

let arr = ['1', '2', '3'];
localStorage.setItem('array', arr); // this will store arr as string 
localStorage.setItem('array_correct', JSON.stringify(arr)); // this will store arr as arr

// retriving item from local storage
console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('array_correct')); // this will retrive array as string
console.log(JSON.parse(localStorage.getItem('array_correct'))); // JSON.parse will convert string format array to array

// clearing local storage
localStorage.removeItem('temp');
// localStorage.clear(); this will clear whole local storage


// session storage will wipe off when site is closed

// setting session storage
sessionStorage.setItem('name', 'ranjan');
sessionStorage.setItem('temp', 'delete');

sessionStorage.setItem('array', arr); // this will store arr as string 
sessionStorage.setItem('array_correct', JSON.stringify(arr)); // this will store arr as arr

// retriving item from session storage
console.log(sessionStorage.getItem('name'));
console.log(sessionStorage.getItem('array_correct')); // this will retrive array as string
console.log(JSON.parse(sessionStorage.getItem('array_correct'))); // JSON.parse will convert string format array to array

// clearing session storage
sessionStorage.removeItem('temp');
// sessionStorage.clear(); this will clear whole session storage
