// Web APIs
/*
* setTimeout()
* DOM APIs
* fetch()
* LocalStorage
* console
* location
this are functionality which browser have, browser gives access  to JS Engine to use them by javascrpit code
you can use them by using global object (window)
*/

// CODE 1 (How setTimeout Works)
console.log('Start');

setTimeout( function cb() {
  console.log('Callback');
}, 2000);

console.log('End');

/*
  Step 1: Global Execution will be created in call stack.
  Step 2: console.log will call Web API console and it will log 'Start' in browser's console.
  Step 3: setTimeout will call Web API setTimeout and it will register the cb() function in web API's environment and 
          also a timer will be started for 2000 ms (timer is also a WebAPI provided by browser)
  Step 4: console.log will call Web API console and it will log 'End' in browser's console.
  Step 5: Global Execution will be pop out from call stack.

  Now 2000 ms is passed 
  How cb() function will be passed in the call stack?

  Callback Queue(Task Queue) :- Callback queue stores all the callback functions.
                    So when the timer expires callback functions are push into the callback queue.
                    
  Event Loop :- Works as a gate keeper. It keeps checking the callback queue, if there is any callback function
                present inside the callback queue it will push the callback function to call stack(when call stack is
                empty, otherwise it will be on hold) from callback queue.

  Step 6: After Timer expiration of cb(), cb() will be pushed into the callback queue
  Step 7: Event Loop will be keep checking the call stack and callback queue, once there will be a funcion in callback
          queue and call stack is empty cb will be passed in call stack.
  Step 8: cb() will be push in call stack and it will creates it Execution context.
  Step 9: console.log will call Web API console and it will log 'Callback' in browser's console.
  Step 10: cb() will be popped out of call stack.
*/

// CODE 2 (How Event Listener Works)

console.log('Start');
document.getElementById('btn').addEventListener('click', function cb(){
  console.log('Button Clicked');
});
console.log('End');

/*
  Step 1: Global Execution will be created in call stack.
  Step 2: console.log will call Web API console and it will log 'Start' in browser's console.
  Step 3: document.getElementById will call a DOM API and it will search for element with id = 'btn;
          after it gets the element addEventLister will call DOM API and it will add a cb() callback
          with a click event in web APIs environment.
  Step 4: console.log will call Web API console and it will log 'End' in browser's console.
  Step 5: Global Execution will be pop out from call stack.

  The event callback will stay there until the button is not clicked. (It can also be removed if eventListener is revoked
  manually or we close the browser)

  Step 6: After the button is clicked, cb() will be pushed into the callback queue
  Step 7: Event Loop will be keep checking the call stack and callback queue, once there will be a funcion in callback
          queue and call stack is empty cb will be passed in call stack.
  Step 8: cb() will be push in call stack and it will creates it Execution context.
  Step 9: console.log will call Web API console and it will log 'Callback' in browser's console.
  Step 10: cb() will be popped out of call stack.
*/

// CODE 3 (How fetch works)
// fetch function basically goes and request a API call, and returns a promise

console.log('Start');

setTimeout( function cbT() {
  console.log('Callback');
}, 2000);

fetch('temp.txt').then(function cbF() {
  console.log('data from text fetched')
});
console.log('End');

/*
  MICROTASK QUEUE contains all callback functions which come from Promises and mutation observer( functions which runs if there are 
    some changes in dom tree. Or
    provides the ability to watch for changes being made to the DOM tree.)

  Step 1: Global Execution will be created in call stack.
  Step 2: console.log will call Web API console and it will log 'Start' in browser's console.
  Step 3: setTimeout will call Web API setTimeout and it will register the cbT() function in web API's environment and 
          also a timer will be started for 2000 ms (timer is also a WebAPI provided by browser)
  Step 4: fetch is also a web API which is used to make server calls and it will register the cbF() in web API environment.
          and cbF() will be executed when fetch return with data from server.
  Step 5: console.log will call Web API console and it will log 'End' in browser's console.
  Step 6: Global Execution will be pop out from call stack.

  Now 2000 ms is passed and Data is fetch from the server, but the call stack is not empty . The code is still running


  Step 7: After Timer expiration of cbT(), cbT() will be pushed into the callback queue
  Step 8: After fetch() return data from server, cbF() will be pushed into the MICROTASK queue.
 
  Difference between microtask queue vs callback queue is that it MICROTASK WILL HAVE HIGHER PRIORITY OVER CALLBACK QUEUE

  Step 9: Event Loop will be keep checking the call stack , microtask and callback queue, now call stack is empty
  It will first execute the cbF() from microtask queue.
  Step 10: cbF() will be push in call stack and it will creates it Execution context.
  Step 11: console.log will call Web API console and it will log 'Callback' in browser's console.
  Step 12: cbF() will be popped out of call stack.
  Step 13: Now microtask queue is empty and call stack is also empty so cbT() will be push into call stack
  Step 14: cbT() will be push in call stack and it will creates it Execution context.
  Step 15: console.log will call Web API console and it will log 'Callback' in browser's console.
  Step 16: cbT() will be popped out of call stack.
*/


/*
1. When does the event loop actually start? - 
  Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. 
  It's always running and doing its job.
2. Are only asynchronous web API callbacks are registered in the web API environment? - 
  YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API
  environment. It's just those async callback functions that go through all this.
3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? 
- Yes, the callback functions are stored, and a reference is scheduled in the queues. 
  Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever,
  that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.
4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 
  No, there are trust issues with setTimeout(). The callback function needs to wait until the Call Stack is empty.
  So the 0 ms callback might have to wait for 100ms also if the stack is busy.
*/
