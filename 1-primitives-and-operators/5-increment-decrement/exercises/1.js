// #todo

'use strict';

console.log('-- begin --');

let x = 0;

let y = ++x;     // first excute the value then declare  if the ++sign is before the value
console.assert(x === 1, 'Test 1 x');
console.assert(y === 1, 'Test 1 y');

x = y--;       // first assign but don't excute the value  if the ++sign is after the value
console.assert(x === 1, 'Test 2 x');
console.assert(y === 0, 'Test 2 y');

let z = x++;    // first declare the value then excute the value.  if the ++sign is after the value
console.assert(x === 2, 'Test 3 x');
console.assert(y === 0, 'Test 3 y');
console.assert(z === 1, 'Test 3 z'); // but i don't understand why z = 1?

y = --x;         // first excute the value then assign . if the --sign is before the value
console.assert(x === 1, 'Test 4 x');
console.assert(y === 1, 'Test 4 y');
console.assert(z === 1, 'Test 4 z');

console.log('-- end --');
