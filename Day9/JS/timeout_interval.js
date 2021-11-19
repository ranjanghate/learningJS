// setTimeout -> allow us to run the function once after defined interval of time
// setInternal -> allow us to run the function once after defined interval of time
// clearTimeout -> stops the execution, if called before execution
// clearInternal -> stops the execution loop

function greet_after_5_sec(name, message) {
  console.log(`Hey ${name}!, ${message}`);
}

time1 = setTimeout(greet_after_5_sec, 5000, 'appu', 'how are you?');
// setTimeout returns a unique for that scheduled function

clearTimeout(time1);
// will stop time1 if called 5sec before execution of time1

function greet_every_1_sec(name, message) {
  console.log(`Hey ${name}!, ${message}`);
}

time2 = setInterval(greet_every_1_sec, 1000, 'ramu', 'welcome?');
// setTimeout returns a unique for that scheduled function

clearInterval(time2);
// will stop time2 execution loop
