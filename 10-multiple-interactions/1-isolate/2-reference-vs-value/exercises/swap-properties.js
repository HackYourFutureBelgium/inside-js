// #todo

'use strict';
// declare variables (corrected syntax)
const obj1 = {a: 'z', b: 2, c: 3};
const obj2 = {a: 'x', b: 'y', c: 1};
let temp;

// swap values

temp = obj1['a'];
obj1['a'] = obj2['c'];
obj2['c'] = temp;

// assert values

console.assert(deepCompare(obj1, {a: 1, b: 2, c: 3}), 'object 1');
console.assert(deepCompare(obj2, {a: 'x', b: 'y', c: 'z'}), 'object 2');

// prettier-ignore
/* eslint-disable */
function deepCompare(actual, expect) {return actual === expect || Object.is(actual, expect)|| (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))|| Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));}