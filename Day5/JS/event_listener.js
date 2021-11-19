// Event Listeners
let button = document.getElementById('submit_button');
button.addEventListener('click', function(e){
  alert('You Have Pressed the button');
  console.log(e.target);
});

let hover = document.getElementById('hover');
hover.addEventListener('mouseover', function(e){
  console.log('mouse hover');
});
/*
  className -> send all class name in single list
  classList -> send all class name in DOM token list(in an array of string)
*/

let multiply = document.getElementById('value');

multiply.addEventListener('keyup', function(e){
  document.getElementById('valueten').value = Number(e.target.value)*10;
});

