// #todo

'use strict';

console.log('-- begin --');

// can you find at least one solution to reach each path?
//  what do all solutions to the same path have in common?
// or maybe there are unreachable paths!

const value1 = false;
const value2 = 'true';
let path = '';

if (value1 && !value2) {  //false
  path = 'if';
} else if (!value1 || !value2) {  // false || true
  path = 'else if 1';
} else if (value2 && !value1) { //false || false
  path = 'else if 2';
} else {
  path = 'else';
}

console.log(path);

console.log('-- end --');
