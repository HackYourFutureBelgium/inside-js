/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let str1 = s.toLowerCase();
    return str1;
};

describe('a string is a string replacing every letter to lowercase.',() => {
  it('should return an empty string when given an empty string.',() => {
   let returned = toLowerCase('');
    expect(returned).toBe('');
  });

it('non empty should return in lowercase',() => {
   let returned = toLowerCase('Hello');
    expect(returned).toBe('hello');
  });

  it('uppercase should return to lowercase',() => {
   let returned = toLowerCase('HELLO');
    expect(returned).toBe('hello');
  });

  it('lowercase should return to lowercase',() => {
   let returned = toLowerCase('hello');
    expect(returned).toBe('hello');
  });
  });