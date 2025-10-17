const isPalindrome = require('../utils.js');

console.log("isPalindrome import:", isPalindrome);

describe('isPalindrome', () => {
 it('should return true for a palindrome', () => { expect(isPalindrome('racecar')).toBe(true);
  });

  it('should return false for a non-palindrome', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  it('should return true for words that are a combination of uppercase and lowercase letters', () => {
    expect(isPalindrome('Racecar')).toBe(true);
  });

  it('should return false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  it('should throw an error if input has any non-alphabetic characters', () => {
    expect(() => isPalindrome('racecar1')).toThrow();
  });

  it('should throw an error if input that isnt a string', () => {
    expect(() => isPalindrome(12345)).toThrow();
  });
});

// Your tests here
