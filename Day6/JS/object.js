// Javascript Objects, Constructors

// objects literals

let car = {
  name: 'honda',
  model_no: '800',
  topSpeed: '80',
  run: function() {
    console.log('this is running');
  }
};

// constructors

function createCar(input_name, input_speed, input_type) {
  this.name = input_name,
  this.speed = input_speed,
  this.model_type = input_type,
  this.details = function() {
    console.log(`This car is ${this.name}, ${this.model_type} and its top speed is ${this.speed} Kmph`);
  }
}

let alto = new createCar('maruti', 80, 'alto');
let mercedes = new createCar('mercedes', 150, 'GLE');

