// #todo

'use strict';

console.log('-- begin --');

// write a condition to take the correct path
//  use value1, value2 & value3 in your expressions
// there will be more than one right answer
//  try to find as many as you can
//  what do these solutions have in common?

const value1 = '200';//string
const value2 = 200; // number
const value3 = false;//boolean
let path = '';

// i have to use truethy and falsey using && and ||

if ((value1 || value3) && value3) {
  path = 'if';
} else if ((value1 === value2)||value3) {
  path = 'else if 1';
} else if ((value1 && value3) || value2) {
  path = 'else if 2'; // ----must to be true
} else {
  path = 'else';
}

console.assert(path === 'else if 2', 'path should be "else if 2"');
console.log(path)

console.log('-- end --');
