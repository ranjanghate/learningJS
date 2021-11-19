// The Promise object represents the eventual completion
// (or failure) of an asynchronous operation and its resulting value.

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

function func1() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      const error = false;
      if (!error) {
        console.log('Function: Your promise has been resolved')
        resolve();
      }
      else {
        console.log('Function: Your promise has not been resolved')
        reject();
      }
    }, 2000);
  })
}

func1().then(function() {
  console.log('Me: Thanks for resolving')
}).catch(function() {
  console.log('Me: No Problem!')
});


/* 
  func1() on call return a Promise. Promise takes two functions as parameters
  1) resolve
  2) reject
  In above code resolve is called when error is false
  and reject is called when error is true
*/


// Problem Statement
// You to enroll student in datatype and if enrollment is successfull print the student list else print 'error message'
// enrollment takes 5000 ms and printing take 1000s

const students = [
                  {name: 'alok', class: 'physics'},
                  {name: 'vimal', class: 'chemistry'}
                ]


function enrollStudent(student) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      students.push(student);
      console.log('Student is enrolled');
      const error = false;
      if(!error) {
        resolve();
      }
      else {
        reject();
      }
    }, 5000);
  })
}

function displayStudents() {
  setTimeout(function() {
    let str = ""
    students.forEach(function(student){
      str += `<li> + ${student.name} + </li>`;
    })
    document.getElementById('student_list').innerHTML = str;
    console.log('Students have been fetched');
  }, 1000);
}


enrollStudent({name: 'okay', class: 'not_okay'}).then(displayStudents).catch(function() {
  console.log('Failed to display students');
});
