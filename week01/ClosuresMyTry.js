'use strict';
function range (start, end) {
  if (end === undefined) {
    return function End (end) {
      return range(start, end);
    };
  }
  const numbersCount = end - start + 1;
  if (numbersCount < 0) { console.log('[]'); } else if (numbersCount > 0) {
    const array = [];
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
    console.log(array.join(', '));
  } else { console.log('[' + start + ']'); }
}

range(3, 3); // [3]
range(3, 8); // [3,4,5,6,7,8]
range(3, 0); // []

const start3 = range(3);
const start4 = range(4);

start3(3); // [3]
start3(8); // [3,4,5,6,7,8]
start3(0); // []

start4(6); // [4,5,6]
console.log();
