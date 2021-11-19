// Object Prototype
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

// adding prototype for objects

function Student(input_name, input_roll_no, input_age) {
  this.name = input_name,
  this.age = input_age,
  this.roll_no = input_roll_no
}

Student.prototype.getDetails = function() {
  return `Name: ${this.name} \n Age: ${this.age} \n Roll No: ${this.roll_no}`;
}

// You can also add prototype in Object (javascript main object), but it is not a safe practice

let student1 = new Student('alyx', '17T15', '14');

/*
  You cannot change/add protype to object created using object literals,
  to add new prototype for object you have to create object using contructor
 */
