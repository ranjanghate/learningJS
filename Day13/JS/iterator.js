// Iterator
// replecating iterators

const nums = [1, 2, 3, 4, 5, 6];

function generateIterator(arr) {
  let nextIndex = 0;

  return {
    next: function(){
      if (nextIndex < arr.length) {
        return {
          value: arr[nextIndex++],
          done: false
        }
      } else {
        return {
          done: false
        }
      }
    }
  }
}

const iterator = generateIterator(nums);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
