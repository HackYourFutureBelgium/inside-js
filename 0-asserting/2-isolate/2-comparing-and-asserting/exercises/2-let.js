// #todo

'use strict';

console.log('-- begin --');

let fruit = 'banana';
let desert = 'cake';
let topping = 'frosting';

desert = 'chocolate' + desert;
console.assert(desert === 'chocolatecake', 'Test 1');

desert = desert + 'with' + topping;
console.assert(desert === 'chocolatecakewithfrosting', 'Test 2');

desert = desert + 'and' + fruit;
console.assert(desert === 'chocolatecakewithfrostingandbanana','Test 3');

console.log('-- end --');
