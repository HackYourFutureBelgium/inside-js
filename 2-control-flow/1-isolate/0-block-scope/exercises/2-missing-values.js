// #todo

'use strict';

console.log('-- begin --');

let x = 3;
console.assert(x === x, 'Test 1: x');
{
  x = 10;
  const y = 5;

  console.assert(x === x, 'Test 2: x');
  console.assert(y === y, 'Test 3: y');
}
console.assert(x === x, 'Test 4: x');

console.log('-- end --');
