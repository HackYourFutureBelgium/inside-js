// #todo

'use strict';

console.log('-- begin --');

const word = 'pitsicola';

let index = -1;
while (index < word.length) {
  index++
  index += 1;

  // skip characters with odd indexes
  if (index % 2 !== 0) {
    continue;
  }

  const nextLetter = word[index];
  console.log(index + ': ' + nextLetter); // p, t, i, o, a
}

console.assert(index === word.length, 'index should be the same as the word length');

console.log('-- end --');
