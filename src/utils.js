function isPalindrome(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  if (str === '') {
    return false;
  }
  // Check for non-alphabetic characters
  if (!/^[a-zA-Z]+$/.test(str)) {
    throw new Error('Input must contain only alphabetic characters');
  }
  // Convert to lowercase and check palindrome
  const lowerStr = str.toLowerCase();
  const reversed = lowerStr.split('').reverse().join('');
  return lowerStr === reversed;
}

module.exports = isPalindrome;
