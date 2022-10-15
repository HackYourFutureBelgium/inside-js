// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a conditional instead of &&
       // && checks if one of them is falsey or both of them is falsey
       // || checks if one of them is truthy or both of them are truethy

// try different values and different types
const a = 1000;
console.log(a);
//                  string of a === string 'number'
const isBigNumber = typeof a === ('number' || a > 1000);
console.log(isBigNumber);

console.log('-- end --');
