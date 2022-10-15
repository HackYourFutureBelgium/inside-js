// #todo

'use strict';

console.log('-- begin --');

// there may be more than one correct answer
//  try finding as many as you can
//  what do all the solutions have in common?
// or maybe the asserted path is unreachable!

const value1 = false;  //boolien  
const value2 = true;   //boolien
let path = '';

if (value1 && !value2) { // false
  path = 'if';
}else if (!value1 || !value2) {  //true
   path = 'else if';
}

console.assert(path === 'else if');
console.log(path);

console.log('-- end --');
