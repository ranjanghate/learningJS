// Arrow functions

const func = () => {
  console.log(`arrow function in called`);
}

func();

// They can be written in one line without braces and return
// one line will automatically return

const greet = () => 'Hello Everyone';
console.log(greet());

// to return an object you have to put small bracket around object syntax
const obj = () => ({name: 'object'});
console.log(obj());

const cal = (x, y) => x * y;
console.log(cal(5,6));


/* Difference between arrow function and regular function is that
  regular function is treat as function while arrow function is treated as variable
  So during memory allocation phase in execution constext arrow function will reffer to undefined, while regular function will
  reffer to whole function
  When you try to call arrow function before defination it will return 'undefine' and
  when you try to call regular function before defination it will be executed.
*/
