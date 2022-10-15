// #todo

'use strict';

console.log('-- begin --');

// can you find at least one solution to reach each path?
//  what do all solutions to the same path have in common?
// or maybe there are unreachable paths!

const value1 = '100';
const value2 = 100;
let path = '';

if  (value1 === value2) { //both must be truethy or falsey  -------ture
  path = 'if';
} else if (!value1 === !value2) { // falsey of the two values must be true -------ture
  path = 'else if 1';
} else if (Number(value2) === Number(value1)) { // number value of the two values must to be true -------true
  path = 'else if 2';
} else if (!(value1 || value2)) {  // one of them must be true ------------false
  path = 'else if 3';
} else {     // none of the above
  path = 'else';
}

console.log(path);

console.log('-- end --');
