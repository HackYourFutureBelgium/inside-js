// #todo

'use strict';

console.log('-- begin --');

const a = 3;
console.assert(a === a, 'Test 1');
{
  const a = 5;
  console.assert(a === a, 'Test 2');
}
console.assert(a === a, 'Test 3');

console.log('-- end --');
