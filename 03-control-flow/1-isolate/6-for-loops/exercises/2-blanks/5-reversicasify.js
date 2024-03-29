// #todo

'use strict';

console.log('-- begin --');

/* Reversicasify

  you can use for loops to do some logic for each element in a string

*/

const originalString = 'abcde';
console.log('originalString:', originalString);

let reverseUpperCase = "";

for (let i = originalString.length-1; i >= 0; i--){
  const newLetter = originalString[i];
  reverseUpperCase += newLetter;
  console.log(i);
  console.log ('reverseUpperCase', reverseUpperCase);
}
let upperCaseString = '';
for (let i = 0; i < reverseUpperCase.length; i++) {
  const newUpperCased = reverseUpperCase[i].toUpperCase(); 
upperCaseString += newUpperCased;
console.log (i);
console.log ('upperCaseString', upperCaseString);
}

console.assert (
  upperCaseString === 'EDCBA',
  'reversed string is the original reversed',
);

console.log('-- end --');
