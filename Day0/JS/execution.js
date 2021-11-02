// How the below code will be executed

var n=2;
function square (num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);

/* 
  That whole code executes in a thing which is called as execution context inside that there two things 
  1.Memory component
  2.Code component (thread of execution)
  In memory component variable and functions values can be stored in a  key value format.
  Code component is a place where whole JavaScript code is executed
  Memory component is also called as variable environment 
  And code component is also called as thread of execution.

  Refer Video : https://www.youtube.com/watch?v=iLWTnMzWtj4&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=4
*/
