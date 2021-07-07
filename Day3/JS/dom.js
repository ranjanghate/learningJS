// DOM manipulation in JS

let a = document;
console.log(a);

a = document.all; // returns HTML tags collection
console.log(a);

a = document.body; // return all script available inside body
a = document.forms; // all document forms 

// iteration HTML collection 

Array.from(document.all).forEach(function (element) {
  console.log(element);
});
