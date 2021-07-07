// Element Selector
// Single Element Selector
let a = document.getElementById("1");
a = a.className;
a = a.childNodes;
a.style.color = 'red';
a.innerText = "Bye bye";
a.innerHTML = `<b> Bold </b>`;
console.log(a);

// query selector
let b = document.querySelector('#one'); // # -> id and . -> class
console.log(b);
b = document.querySelector('.child'); // return first html if multiple class of same name present
console.log(b);
b = document.querySelector('div') // tag with any symbol
console.log(b);

//  Multiple Element Selector

let elems = document.getElementsByClassName('child');
console.log(elems[2]);
elems = document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(function (elements) {
  elements.style.color = 'orange';
});
