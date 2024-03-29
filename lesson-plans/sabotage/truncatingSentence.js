/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  s = s.split(' ');
  result = [];
  for (let i = 0; i < s.length; i++){
    if (i < k){
      result.push(s[i]);
    }
  }  
return result.join(' ');
};

describe('a truncinate "s" such that it contains only the first "k" words', () => {
  it('should return an empty string when given an empty sentence',() => {
    const sentence = "";
    const truncatedSentence = truncateSentence(sentence, 4);
    expect(truncatedSentence).toBe("");
  });

it('should truncate a sentence correctly',() => {
    const sentence = "Hello how are you friend";
    const truncatedSentence = truncateSentence(sentence, 4);
    expect(truncatedSentence).toBe("Hello how are you");
  });

it('should return the original sentence when given a number equal to the length of the sentence',() => {
    const sentence = "What is the solution for this problem";
    const truncatedSentence = truncateSentence(sentence, 7);
    expect(truncatedSentence).toBe("What is the solution for this problem");
  });

   });
