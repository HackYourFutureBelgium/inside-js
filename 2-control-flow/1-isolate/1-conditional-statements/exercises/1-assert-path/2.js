// #todo

'use strict';

console.log('-- begin --');

// are there any unreachable paths?

const value1 = 100; //number
const value2 = '100'; //string
let path = '';

if (value1 === value2) { // false
  path = 'if';
} else if (typeof value1 === typeof value2) { //false
  path = 'else if 1';
} else if (Number(value1) === Number(value2)) { //true
  path = 'else if 2';
}

console.assert(path === 'else if 2');
console.log(path);

console.log('-- end --');
