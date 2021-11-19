// print 1 to 5 after 1 to 5 sec interval
function x() {
  for(var i=1; i<=5; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000 );
  }
}

x(); // will print 6 5-times. why?
// because var i is reference to same memory address(because function scoped) after each iteration

// How to fix it?
// By using block scoped variable i.e, 'let'

function y() {
  for(let p=1; p<=5; p++) {
    setTimeout(function() {
      console.log(p);
    }, p * 1000 );
  }
}

y();

// solve the problem using only var

function z() {
  function repeat(x) {
    setTimeout(function() {
      console.log(x);
    }, x * 1000 );
  }
  for( var t=1; t<= 5; t++)  {
    repeat(t);
  }
}

z();
// whenever repeat function is called a new execution content will be created, hence the parameter x of function will 
// refer to unique memory addres
