// Creating Removing element

// Creating Element
let element = document.createElement('li');
element.className = 'child';
element.id = 'createdli';
element.setAttribute('title', 'attr');
element.innerText = 'Fourth';
console.log(element);

// Appending Element
let list = document.querySelector('ul.list') // finding first ul div with class name list
list.appendChild(element);
// list.innerHTML = element.innerHTML; this will rewrite ul element

// Replace Element

let element2 = document.createElement('h3');
let text = document.createTextNode('Text node Fourth');
element2.appendChild(text);
element.replaceWith(element2);

let ls = document.getElementById('points');
ls.replaceChild(element, element2);

// Remove Element
ls.removeChild(element);


// Attribute Functions
/*
  getAttribute( attribute_name ) // return attribute value
  hasAttribute( attribute_name ) // return whether the elemenet contains attribute
  removeAttribute( attritbute_name ) // remove the attribute from element
*/

let anchor = document.createElement('a');
anchor.setAttribute('href', 'www.google.com');
let head = document.createElement('h1');
head.innerText = 'Go To Google '
anchor.appendChild(head);

let mn = document.querySelector('#main');
mn.appendChild(anchor);