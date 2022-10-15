// #todo

'use strict';

console.log('-- begin --');

// write a condition to take the correct path
//  use both value1 & value2 in your expressions
// there will be more than one right answer
//  try to find as many as you can
//  what do these solutions have in common?

const value1 = '';//empty string
const value2 = -1;//number
let path = '';//empty string

if (Boolean(value1) === Boolean(!value2)) {
  path = 'if';    //--must to be true
} else if (Number(value1) === Number(value2)) {
  path = 'else if';
} else {
  path = 'else';
}

console.assert(path === 'if', 'path should be "if"');

console.log(path);
console.log('-- end --');
