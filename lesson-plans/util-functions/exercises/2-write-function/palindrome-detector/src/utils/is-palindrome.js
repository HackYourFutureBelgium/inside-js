/**
 * Checks if a string is a palindrome.
 * Palindrome: a string that is the same forwards or backwards.
 *
 * @param {string} [toCheck=''] - The string that might be a palindrome.
 * @returns {boolean} Is the string a palindrome?
 */
export const isPalindrome = (toCheck = '') => {
let reverse = '';
for (let i=0; i< toCheck.length; i++)
{
  let character = toCheck[i];
  reverse=character+reverse;
}
return toCheck===reverse
};
