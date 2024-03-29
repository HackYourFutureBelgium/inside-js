/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums){
    if (nums.length > 1){
  let numSet = new Set();
for (let i = 0; i < nums.length; i++){
let num = nums[i];
if (numSet.has(num)){
  return true; // duplicate found//
}
numSet.add(num);
} 
    }
    return false;
};

  describe('containsDuplicate: contains duplicate numbers',() => {
  it('empty string does not contain any number',() => {
    const returned = containsDuplicate('', false);
    expect(returned).toEqual(false);
  });
  it('check for non empty string',() => {
    const returned = containsDuplicate('hi', false);
    expect(returned).toEqual(false);
  });
  it('check for an array having different numbers',() => {
    const returned = containsDuplicate([3,2,5], false);
    expect(returned).toEqual(false);
  });
  it('check for an array having same numbers',() => {
    const returned = containsDuplicate([2,1,3,2], true);
    expect(returned).toEqual(true);
  });
});

