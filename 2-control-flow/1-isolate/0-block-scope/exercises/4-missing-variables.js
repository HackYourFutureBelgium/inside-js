// #todo

'use strict';

console.log('-- begin --');

let x = 'hi!';
let y = 'hi!';
{
  x = 'hi!';
  let y = 'bye!';
}
x = 'bye!';
console.assert(x === 'hi!', 'Test 1');
console.assert(y === 'bye!', 'Test 2');

console.log('-- end --');
