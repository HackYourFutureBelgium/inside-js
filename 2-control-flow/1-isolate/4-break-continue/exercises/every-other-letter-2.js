// #todo

'use strict';

console.log('-- begin --');

const word = 'pitsicola';
//           '012345678'

let index = -1;
while (index < word.length) {
  index += 1;

  // skip characters with odd indexes
  if (index % 2 !== 0) {
    continue;
  }

  const nextLetter = word[index];
  console.log(index + ': ' + nextLetter); // p, t, i, o, a
}


console.log('-- end --');
