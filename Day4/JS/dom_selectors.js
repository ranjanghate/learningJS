// DOM Selectors

/*
  element selector:
  1. Single element Selector
  2/ Multiple element Selector
*/

// -- Single Element Selectors -- 

let e = document.getElementById('one');
console.log(e.className); // for class name 
console.log(e.childNodes); // for child node inside element
console.log(e.parentNode); // for parent nodes
e.style.color = 'red';
e.innerText = 'changing the text'; // changes the inner text
e.innerHTML = `<b> Bold Text</b>`; // changes the inner html
console.log(e.innerHTML); // gets the inner HTML
console.log(e.innerText); // gets the inner TEXT

// QuerySelectors
let elm = document.querySelector('#one');
e.style.color = 'orange';

let cls = document.querySelector('.child') // return the first element of child class
cls.style.color = 'green';

let div = document.querySelector('div') // return the first element of div tag
console.log(div);

// -- Multi Element Selectors --

let elems = document.getElementsByClassName('child');
console.log(elems.length);

let divs = document.getElementsByTagName('div');
console.log(divs.length);

