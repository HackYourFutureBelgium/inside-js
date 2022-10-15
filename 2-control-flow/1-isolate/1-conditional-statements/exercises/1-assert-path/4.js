// #todo

'use strict';

console.log('-- begin --');

// are there any unreachable paths?

const value1 = true;  // boolien
const value2 = true;  // boolien
let path = '';  // empty string

if (value1 && !value2) { //false
  path = 'if';
} else if (!value1 || !value2) {  //false
  path = 'else if 1';
} else if (value2 && !value1) { //false
  path = 'else if 2';
} else {
  path = 'else';
}

console.assert(path === 'else');
console.log(path);

console.log('-- end --');
