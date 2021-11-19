// DOM Traversing
let cont = document.querySelector('.dummy');
console.log(cont);

cont = document.querySelector('.container');
console.log(cont.childNodes); // it will also include the text and comment written inside the div
console.log(cont.children); // will also show the tags(elements) inside the class

console.log(cont.children[0].nodeName); // will show node name (header)
console.log(cont.children[0].nodeType); // will show node type (1)
/*
  Node Type
  1 -> Element
  2 -> Attribute
  3 -> Text Node
  8 -> Comment
  9 -> Document
  10 -> docType
*/

console.log(cont.firstChild); // will also show text comments etc
console.log(cont.firstElementChild); // will only show elements

console.log(cont.lastChild); // will also show text comments etc
console.log(cont.lastElementChild); // will only show elements

console.log(cont.childElementCount);

console.log(cont.firstElementChild.nextSibling); // will also show text comments etc
console.log(cont.firstElementChild.nextElementSibling); // will only show elements
