// #todo

'use strict';

console.log('-- begin --');

// PURE FUNCTIONS are a habit, not a language feature:
//  - only use LOCAL VARIABLES and PARAMETERS in your function body

// writing pure functions is easier to understand and debug
//  because their behavior is consistent
//  you'll get the same return value every time you use the same arguments

// you can even check if your function is pure without executing it!
// point at each variable inside the function body and ask
//  1. is this declared as a parameter?
//  2. is this declared in the body with let, const or var?
// if the answer to both functions is "no", it's not a pure function

// which of these are pure functions?

const a = () => {
  return x + y;
};  // not pure

const b = (y) => {
  result = x + y;
  return result;
};   // not pure

const c = (y, x) => {
  const m = y - x;
  return x + m;
};    //pure

const d = (x, y) => {
  const hello = 'hi';
  return x + y + z;
};   // not pure

const e = (x, y) => {
  p += z;
  return z + y;
};   //  pure

const f = (p) => {
  return p * 2;
};     // pure

console.log('-- end --');
